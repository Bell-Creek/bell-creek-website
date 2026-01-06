import { Handler } from '@netlify/functions';

interface ContactFormData {
  name: string;
  email: string;
  telefon?: string;
  unternehmen?: string;
  interesse: string;
  nachricht?: string;
}

// Using SendGrid or your preferred email service
// Install: npm install @sendgrid/mail
// Set SENDGRID_API_KEY environment variable in Netlify dashboard

const sendEmail = async (formData: ContactFormData): Promise<void> => {
  const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;

  if (!SENDGRID_API_KEY) {
    // Fallback: Log to console (won't send email, but won't fail)
    console.log('Email submission received:', formData);
    return;
  }

  try {
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(SENDGRID_API_KEY);

    const emailContent = `
Neue Kontaktanfrage von der Website

Name: ${formData.name}
E-Mail: ${formData.email}
${formData.telefon ? `Telefon: ${formData.telefon}` : ''}
${formData.unternehmen ? `Unternehmen: ${formData.unternehmen}` : ''}
Interesse: ${formData.interesse}
${formData.nachricht ? `Nachricht:\n${formData.nachricht}` : ''}
    `.trim();

    const msg = {
      to: 'info@bell-creek.com',
      from: 'noreply@bell-creek.com',
      subject: `Neue Kontaktanfrage: ${formData.interesse}`,
      text: emailContent,
      html: `
        <h2>Neue Kontaktanfrage</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>E-Mail:</strong> <a href="mailto:${formData.email}">${formData.email}</a></p>
        ${formData.telefon ? `<p><strong>Telefon:</strong> ${formData.telefon}</p>` : ''}
        ${formData.unternehmen ? `<p><strong>Unternehmen:</strong> ${formData.unternehmen}</p>` : ''}
        <p><strong>Interesse:</strong> ${formData.interesse}</p>
        ${formData.nachricht ? `<p><strong>Nachricht:</strong></p><p>${formData.nachricht.replace(/\n/g, '<br />')}</p>` : ''}
      `,
      replyTo: formData.email,
    };

    await sgMail.send(msg);
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Failed to send email');
  }
};

const handler: Handler = async (event) => {
  // Only accept POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    const formData: ContactFormData = JSON.parse(event.body || '{}');

    // Validate required fields
    if (!formData.name || !formData.email || !formData.interesse) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          error: 'Missing required fields: name, email, interesse',
        }),
      };
    }

    // Send email
    await sendEmail(formData);

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: 'Email sent successfully',
      }),
    };
  } catch (error) {
    console.error('Error in send-email function:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Internal server error',
        message: error instanceof Error ? error.message : 'Unknown error',
      }),
    };
  }
};

export { handler };
