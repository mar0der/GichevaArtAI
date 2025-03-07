'use client';

import React from 'react';
import { Header } from '@/components/header';

export default function About() {
  return (
    <>
      <Header />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-primary-900 mb-8">About the Artist</h1>
        
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="md:w-1/3">
            <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden shadow-lg">
              {/* Replace with actual artist image */}
              <div className="absolute inset-0 bg-primary-200 flex items-center justify-center">
                <span className="text-primary-500">Artist Photo</span>
              </div>
            </div>
          </div>
          
          <div className="md:w-2/3">
            <h2 className="text-2xl font-semibold text-primary-800 mb-4">Elena Gicheva</h2>
            <p className="text-primary-700 mb-4">Contemporary Fine Artist | b. 1985, Sofia, Bulgaria</p>
            
            <div className="prose prose-primary max-w-none">
              <p className="mb-4">
                Elena Gicheva is a contemporary artist whose work explores the intersection of traditional techniques and modern expression. Born and raised in Sofia, Bulgaria, she developed a passion for art at an early age, inspired by the rich cultural heritage of Eastern Europe and the dramatic landscapes of her homeland.
              </p>
              <p className="mb-4">
                After completing her formal education at the National Academy of Arts in Sofia, Elena traveled extensively throughout Europe, absorbing diverse artistic influences and refining her unique style. Her work is characterized by bold color palettes, dynamic compositions, and a distinctive blend of abstract and figurative elements.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-primary-800 mb-6">Artistic Journey</h2>
          <div className="prose prose-primary max-w-none">
            <p className="mb-4">
              Elena's artistic journey began with classical training in oils and watercolors, but she quickly developed an interest in experimental techniques and mixed media. Her early works were heavily influenced by the Eastern European expressionist tradition, featuring emotional landscapes and symbolic imagery.
            </p>
            <p className="mb-4">
              In 2010, Elena relocated to Western Europe, where she established her studio and began exhibiting her work internationally. This period marked a significant evolution in her style, as she incorporated more abstract elements and began exploring themes of memory, identity, and the relationship between humans and their environment.
            </p>
            <p className="mb-4">
              Today, Elena's paintings can be found in private collections across Europe and North America. Her recent work has focused on large-scale canvases that invite viewers to immerse themselves in richly textured worlds of color and form, blurring the boundaries between the real and the imagined.
            </p>
          </div>
        </div>
        
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-primary-800 mb-6">Artist Statement</h2>
          <div className="prose prose-primary max-w-none">
            <blockquote className="italic border-l-4 border-accent pl-4 py-2 mb-4">
              "My work is an ongoing conversation between tradition and innovation, between the tangible world we inhabit and the emotional landscapes we carry within. I seek to create paintings that resonate on multiple levels—visually striking at first glance, but revealing deeper layers of meaning through prolonged engagement.
              <br /><br />
              Each canvas is an exploration, a journey without a predetermined destination. I begin with intuitive gestures and gradually build complex relationships of color, texture, and form. The resulting works invite viewers to create their own narratives and forge personal connections with the imagery.
              <br /><br />
              In an increasingly digital world, I believe in the enduring power of physical art—the irreplaceable experience of standing before a painting and feeling its presence. My hope is that my work creates moments of contemplation and wonder in the lives of those who encounter it."
            </blockquote>
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold text-primary-800 mb-6">Exhibitions & Recognition</h2>
          <ul className="space-y-4">
            <li className="border-b border-primary-100 pb-4">
              <div className="font-medium text-primary-900">2023</div>
              <div className="text-lg font-semibold">Solo Exhibition: "Chromatic Dialogues"</div>
              <div className="text-primary-600">Contemporary Art Space, Berlin, Germany</div>
            </li>
            <li className="border-b border-primary-100 pb-4">
              <div className="font-medium text-primary-900">2021</div>
              <div className="text-lg font-semibold">Group Exhibition: "New Perspectives"</div>
              <div className="text-primary-600">International Art Fair, Vienna, Austria</div>
            </li>
            <li className="border-b border-primary-100 pb-4">
              <div className="font-medium text-primary-900">2019</div>
              <div className="text-lg font-semibold">Award: "Emerging Artist of the Year"</div>
              <div className="text-primary-600">European Contemporary Art Foundation</div>
            </li>
            <li className="border-b border-primary-100 pb-4">
              <div className="font-medium text-primary-900">2017</div>
              <div className="text-lg font-semibold">Solo Exhibition: "Between Worlds"</div>
              <div className="text-primary-600">Gallery Modern, Paris, France</div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}