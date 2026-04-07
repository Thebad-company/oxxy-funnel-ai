import React, { useState } from 'react';
import { APP_DATA } from '../data/mockData';

export const FAQ: React.FC = () => {
    const { faq } = APP_DATA;
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-32 px-6 bg-surface-container-low" id="faq">
            <div className="max-w-4xl mx-auto">
                <div className="mb-20 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6 font-black text-xs text-primary uppercase tracking-[0.2em]">
                        Your Questions Answered
                    </div>
                    <h2 className="font-headline text-4xl md:text-5xl font-black text-secondary leading-tight uppercase tracking-tight">{faq.title}</h2>
                </div>

                <div className="space-y-4">
                    {faq.questions.map((item, i) => (
                        <div key={i} className={`group bg-white rounded-3xl border transition-all duration-500 overflow-hidden ${openIndex === i ? 'border-primary shadow-xl shadow-primary/5' : 'border-outline-variant/50 hover:border-primary/50'}`}>
                            <button 
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="flex justify-between items-center w-full text-left font-headline font-bold text-lg md:text-xl p-8 group-hover:text-primary transition-colors cursor-pointer"
                            >
                                <span className={`transition-transform duration-500 ${openIndex === i ? 'translate-x-2 text-primary' : ''}`}>{item.question}</span>
                                <span className={`material-symbols-outlined transition-all duration-500 bg-secondary-container/10 p-2 rounded-xl text-primary ${openIndex === i ? 'rotate-180 bg-primary text-white' : ''}`}>
                                    {openIndex === i ? 'remove' : 'add'}
                                </span>
                            </button>
                            
                            <div className={`transition-all duration-500 ease-in-out px-8 ${openIndex === i ? 'max-h-[500px] pb-10 opacity-100' : 'max-h-0 opacity-0'}`}>
                                <p className="font-body text-on-surface-variant text-lg leading-relaxed italic border-l-4 border-primary/20 pl-6">
                                    {item.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
