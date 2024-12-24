import React from 'react';

export default function CalisthenicsSection() {
  return (
    <div className="max-w-4xl mx-auto w-full px-4">
      <h2 className="text-4xl font-bold mb-8 text-center text-white 
        drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">
        Calisthenics
      </h2>
      <div className="bg-black/40 backdrop-blur-sm p-6 md:p-8 rounded-lg border border-purple-500/20">
        <div className="mb-6">
          <p className="text-2xl font-mono mb-2">/ˌkaləˈstheniks/</p>
          <p className="text-gray-400 italic">noun</p>
        </div>
        
        <p className="text-gray-200 leading-relaxed mb-8">
          A form of exercise consisting of a variety of movements, often using body weight, that improve strength, flexibility, and overall fitness. Calisthenics emphasizes natural movement patterns and requires minimal equipment, making it accessible and versatile.
        </p>

        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4 text-purple-400">Key Benefits:</h3>
          <ul className="list-disc list-inside text-gray-200 space-y-2">
            <li>Builds functional strength and endurance.</li>
            <li>Enhances flexibility and mobility.</li>
            <li>Promotes body awareness and control.</li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4 text-purple-400">Examples of Exercises:</h3>
          <div className="space-y-4">
            <div>
              <p className="font-bold mb-2">Beginner:</p>
              <p className="text-gray-200">Push-ups, pull-ups, bodyweight squats, and planks.</p>
            </div>
            <div>
              <p className="font-bold mb-2">Intermediate:</p>
              <p className="text-gray-200">Dips, muscle-ups, pistol squats, and dragon flags.</p>
            </div>
            <div>
              <p className="font-bold mb-2">Advanced:</p>
              <p className="text-gray-200">One-arm pull-ups, planche holds, front levers, back levers, handstand push-ups, human flags, and L-sit to handstand transitions.</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-2 text-purple-400">Etymology:</h3>
          <p className="text-gray-200">
            Derived from the Greek words kalos (beauty) and sthenos (strength), reflecting the harmonious balance of strength and form in these exercises.
          </p>
        </div>
      </div>
    </div>
  );
}