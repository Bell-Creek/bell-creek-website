import React, { useState, useEffect } from 'react';
import { MessageCircle, Bot, ChevronRight } from 'lucide-react';

interface ChatExample {
  question: string;
  answer: string;
}

const chatExamples: ChatExample[] = [
  {
    question: "Who haven't I spoken to in a while that I should catch up with?",
    answer: "Here are three people you've not talked to in over 6 months who you're close with: Sarah, Patrick, and Emma. Tap to see what you last spoke about."
  },
  {
    question: "Who lives in Berlin and loves good coffee?",
    answer: "Sarah, Tom, and Jonas all live in Berlin and you've tagged them with coffee spots you discussed. Here are their favorite cafés."
  },
  {
    question: "Which friends have important dates coming up soon?",
    answer: "In the next 4 weeks: Patrick's birthday, Emma's anniversary, and Lena's (Emma's daughter) birthday. Here's what you last talked about with each of them."
  }
];

const ChatDemoSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedQuestion, setDisplayedQuestion] = useState('');
  const [displayedAnswer, setDisplayedAnswer] = useState('');
  const [phase, setPhase] = useState<'typing-question' | 'pause' | 'typing-answer' | 'display'>('typing-question');

  useEffect(() => {
    const example = chatExamples[currentIndex];
    
    if (phase === 'typing-question') {
      if (displayedQuestion.length < example.question.length) {
        const timeout = setTimeout(() => {
          setDisplayedQuestion(example.question.slice(0, displayedQuestion.length + 1));
        }, 30);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => setPhase('pause'), 300);
        return () => clearTimeout(timeout);
      }
    }
    
    if (phase === 'pause') {
      const timeout = setTimeout(() => setPhase('typing-answer'), 800);
      return () => clearTimeout(timeout);
    }
    
    if (phase === 'typing-answer') {
      if (displayedAnswer.length < example.answer.length) {
        const timeout = setTimeout(() => {
          setDisplayedAnswer(example.answer.slice(0, displayedAnswer.length + 2));
        }, 15);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => setPhase('display'), 100);
        return () => clearTimeout(timeout);
      }
    }
    
    if (phase === 'display') {
      const timeout = setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % chatExamples.length);
        setDisplayedQuestion('');
        setDisplayedAnswer('');
        setPhase('typing-question');
      }, 4000);
      return () => clearTimeout(timeout);
    }
  }, [phase, displayedQuestion, displayedAnswer, currentIndex]);

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <MessageCircle className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Natural Conversations</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Chat with your network's{' '}
            <span className="text-gradient">memory.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ask anything about your relationships. CoLinked understands context and gives you actionable answers.
          </p>
        </div>

        {/* Chat Demo Container */}
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Phone frame */}
            <div className="bg-card/80 backdrop-blur-xl border border-border/50 rounded-3xl p-6 md:p-8 shadow-2xl">
              {/* Chat header */}
              <div className="flex items-center gap-3 pb-6 border-b border-border/30 mb-6">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">CoLinked AI</h4>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-xs text-muted-foreground">Always ready</span>
                  </div>
                </div>
              </div>

              {/* Chat messages */}
              <div className="space-y-6 min-h-[280px]">
                {/* User message */}
                <div className="flex justify-end">
                  <div className="bg-primary text-primary-foreground rounded-2xl rounded-br-md px-5 py-3 max-w-[85%] shadow-lg shadow-primary/20">
                    <p className="text-sm md:text-base">
                      {displayedQuestion}
                      {phase === 'typing-question' && (
                        <span className="inline-block w-0.5 h-4 bg-primary-foreground ml-0.5 animate-pulse" />
                      )}
                    </p>
                  </div>
                </div>

                {/* AI response */}
                {(phase === 'typing-answer' || phase === 'display') && (
                  <div className="flex justify-start animate-fade-in">
                    <div className="bg-muted/50 border border-border/30 rounded-2xl rounded-bl-md px-5 py-4 max-w-[85%]">
                      <p className="text-sm md:text-base text-foreground leading-relaxed">
                        {displayedAnswer}
                        {phase === 'typing-answer' && (
                          <span className="inline-block w-0.5 h-4 bg-foreground ml-0.5 animate-pulse" />
                        )}
                      </p>
                      {phase === 'display' && (
                        <div className="flex items-center gap-2 mt-3 pt-3 border-t border-border/30">
                          <span className="text-xs text-primary font-medium">View details</span>
                          <ChevronRight className="w-3 h-3 text-primary" />
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Typing indicator */}
                {phase === 'pause' && (
                  <div className="flex justify-start animate-fade-in">
                    <div className="bg-muted/50 border border-border/30 rounded-2xl rounded-bl-md px-5 py-4">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: '0ms' }} />
                        <span className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: '150ms' }} />
                        <span className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: '300ms' }} />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-transparent to-primary/20 rounded-3xl blur-2xl -z-10 opacity-50" />
          </div>

          {/* Progress indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {chatExamples.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setDisplayedQuestion('');
                  setDisplayedAnswer('');
                  setPhase('typing-question');
                }}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'w-8 bg-primary' 
                    : 'w-1.5 bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatDemoSection;
