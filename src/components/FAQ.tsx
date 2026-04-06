import React from 'react';
import { APP_DATA } from '../data/mockData';

export const FAQ: React.FC = () => {
    const { faq } = APP_DATA;

    return (
        <section className="py-24 px-6 bg-surface" id="faq">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="font-headline text-4xl mb-12 italic">{faq.title}</h2>
                <div className="space-y-4">
                    {faq.questions.map((item, i) => (
                        <div key={i} className="border-b border-outline-variant hover:border-primary transition-colors group">
                            <button className="flex justify-between items-center w-full text-left font-bold text-lg py-6 group-hover:text-primary transition-colors">
                                <span>{item.question}</span>
                                <span className="material-symbols-outlined transition-transform group-hover:rotate-180">expand_more</span>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
