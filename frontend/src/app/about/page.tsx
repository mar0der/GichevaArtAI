'use client';

import React from 'react';
import { Header } from '@/components/header';

export default function About() {
  return (
    <>
      <Header />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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
            <h2 className="text-2xl font-semibold text-primary-800 mb-4">Radka Gicheva</h2>
            <p className="text-primary-700 mb-4">Contemporary Abstract Artist | b. June 1, Plovdiv, Bulgaria</p>
            
            <div className="prose prose-primary max-w-none">
              <p className="mb-4">
                Born on the 1st of June in the vibrant city of Plovdiv, Bulgaria (EU), my connection to art was kindled at an early age. I recall picking up the paintbrush as a young child of five or even earlier, and since then, my passion for painting has been unwavering.
              </p>
              <p className="mb-4">
                In May 2017, I became a proud member of the Dubai International Art Centre, marking a significant milestone in my artistic journey. Over the years, I have explored various subjects, from enchanting landscapes and tranquil still life to blooming flowers and spirited animals. However, it is through abstract art that I have found the most authentic expression of my inner world.
              </p>
              <p className="mb-4">
                My artistic portfolio boasts a variety of group exhibitions, live art events, and workshops in diverse locations including Dubai, Ras Al-Khaimah, Sharjah, and my home country, Bulgaria.
              </p>
              <p className="mb-4">
                Abstract painting is the style that resonates most with my personality. I use this form and mixed media art as a conduit to express my love for shapes, colors, and to communicate my unique vision as an artist. My paintings are intuitive creations, birthed from several layers of paint, each adding depth and complexity to the piece.
              </p>
              <p className="mb-4">
                Acrylic paints, inks, and both soft and oil pastels are my preferred mediums. To create captivating textures and achieve a rich, interesting interplay of effects in my paintings, I incorporate recycling materials, fabrics, and everyday household items. This practice not only helps breathe new life into discarded materials but also adds a unique dimension to each painting.
              </p>
              <p className="mb-4">
                Each of my creations is original, handmade, and carries its own distinct personality. To ensure longevity, all of my paintings are signed on the front and back, and are meticulously finished with two coats of varnish. This enhances the intensity, transparency, and luminosity of colors, offering an immersive visual experience while protecting the integrity of the artwork.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-primary-800 mb-6">Education</h2>
          <ul className="space-y-4">
            <li className="border-b border-primary-100 pb-4">1990 - present - Self lessons;</li>
            <li className="border-b border-primary-100 pb-4">2003-2006 – Art lessons in Studio Chaushev, Old town, Plovdiv, Bulgaria;</li>
            <li className="border-b border-primary-100 pb-4">2005-2010 – Master in Geodesy in UACEG, Sofia, Bulgaria;</li>
            <li className="border-b border-primary-100 pb-4">2017-2020 - Oil Classes in Dubai International Art Centre, Dubai, UAE;</li>
            <li className="border-b border-primary-100 pb-4">2019 - Abstract and Mixed media classes in Dubai International Art Center;</li>
          </ul>
        </div>
        
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-primary-800 mb-6">Events</h2>
          <div className="prose prose-primary max-w-none">
            <h3 className="font-semibold">***Awards***</h3>
            <ul className="space-y-4 mb-4">
              <li>DIAC Merit Award - '62nd Members' Art Exhibition ' /November 2017/ - Gallery 76, Dubai International Art Centre, Dubai, United Arab Emirates;</li>
              <li>DIAC Merit Award - '64nd Members' Art Exhibition '/November 2019/ - Gallery 76, Dubai International Art Centre, Dubai, United Arab Emirates;</li>
            </ul>
            <h3 className="font-semibold">***Membership***</h3>
            <ul className="space-y-4 mb-4">
              <li>since May 2017 - Member of Dubai International Art Centre, Dubai, United Arab Emirates;</li>
            </ul>
            <h3 className="font-semibold">***Live Art Events***</h3>
            <ul className="space-y-4">
              <li>28th Dec 2019 - Live Art with theme "Christmas", at Sheraton Sharjah Beach Resort & Spa, organized by Art4You Gallery;</li>
              <li>17th Jan 2020 - Live Art Event with theme "HOPE", at Dubai Creek Park, organized by Art4You Gallery and The Paint Brush Community;</li>
              <li>14th Feb 2020 - LIVE ART EVENT: "Be Mine Valentine", theme: Family Love, at Cassells Hotel, Al Barsha, Dubai, UAE, organized by Art4You Gallery;</li>
              <li>21st Feb 2020 - Live Art Event organized by Art Noor, Funun Arts and Art4You Gallery, part of Fine Arts Festival, at Ras Al Khaimah, UAE. Theme: Connected Communities;</li>
              <li>26th Dec 2020 - Live Art Event: "Time to Hope & be Joyful", organized by Funun Arts Group, at Novotel DWTC, Dubai, UAE;</li>
            </ul>
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold text-primary-800 mb-6">Exhibitions & Recognition</h2>
          <ul className="space-y-4">
            <li className="border-b border-primary-100 pb-4">
              <div className="font-medium text-primary-900">Feb 2025</div>
              <div className="text-lg font-semibold">Solo exhibition "Artist in residence"</div>
              <div className="text-primary-600">La Brocante furniture store, Al Quoz, Dubai, UAE</div>
            </li>
            <li className="border-b border-primary-100 pb-4">
              <div className="font-medium text-primary-900">Feb 2025</div>
              <div className="text-lg font-semibold">Group exhibition</div>
              <div className="text-primary-600">organized by Artezaar at More Cafe, Dubai World Trade Centre - The Offices 1, One Central - Dubai, UAE</div>
            </li>
            <li className="border-b border-primary-100 pb-4">
              <div className="font-medium text-primary-900">Sept 2024</div>
              <div className="text-lg font-semibold">#Iampeace, Global Peace Conference</div>
              <div className="text-primary-600">group exhibition at Etisalat Academy Auditorium, Muhaisnah Dubai, UAE</div>
            </li>
            <li className="border-b border-primary-100 pb-4">
              <div className="font-medium text-primary-900">June 2024</div>
              <div className="text-lg font-semibold">"Summer Hues"</div>
              <div className="text-primary-600">online exhibition organized by Artezaar, Dubai, UAE</div>
            </li>
            <li className="border-b border-primary-100 pb-4">
              <div className="font-medium text-primary-900">May 2024</div>
              <div className="text-lg font-semibold">"Blossom and Brushstrokes: A summer Exhibit"</div>
              <div className="text-primary-600">online exhibition organized by Artezaar, Dubai, UAE</div>
            </li>
            <li className="border-b border-primary-100 pb-4">
              <div className="font-medium text-primary-900">Oct 2023</div>
              <div className="text-lg font-semibold">Global Expressions: A Fusion of cultures in Art</div>
              <div className="text-primary-600">organized by Dubai International Art Centre, Embassy of India, Abu Dhabi, UAE</div>
            </li>
            <li className="border-b border-primary-100 pb-4">
              <div className="font-medium text-primary-900">Sept 2023</div>
              <div className="text-lg font-semibold">"The Showroom by DIPR"</div>
              <div className="text-primary-600">Anantara Downtown hotel, Dubai, UAE</div>
            </li>
            <li className="border-b border-primary-100 pb-4">
              <div className="font-medium text-primary-900">Aug 2023</div>
              <div className="text-lg font-semibold">"Collectible creation exhibition"</div>
              <div className="text-primary-600">online exhibition organized by Artezaar, Dubai, UAE</div>
            </li>
            <li className="border-b border-primary-100 pb-4">
              <div className="font-medium text-primary-900">June 2023</div>
              <div className="text-lg font-semibold">"Summer Hues"</div>
              <div className="text-primary-600">group exhibition at Bedia Art gallery, Dubai, UAE</div>
            </li>
            <li className="border-b border-primary-100 pb-4">
              <div className="font-medium text-primary-900">Mar 2022</div>
              <div className="text-lg font-semibold">Artist in residence</div>
              <div className="text-primary-600">at La Brocante DXB, Dubai, UAE</div>
            </li>
            <li className="border-b border-primary-100 pb-4">
              <div className="font-medium text-primary-900">Dec 2021</div>
              <div className="text-lg font-semibold">"Empower"</div>
              <div className="text-primary-600">group exhibition at Raw Coffee Company, Dubai, UAE</div>
            </li>
            <li className="border-b border-primary-100 pb-4">
              <div className="font-medium text-primary-900">Nov 2021</div>
              <div className="text-lg font-semibold">Solo Art Exhibition</div>
              <div className="text-primary-600">Pottery Barn, Dubai Mall, Dubai, UAE</div>
            </li>
            <li className="border-b border-primary-100 pb-4">
              <div className="font-medium text-primary-900">Nov 2021</div>
              <div className="text-lg font-semibold">"INDRADHANUSH"</div>
              <div className="text-primary-600">group exhibition and walk art organized by "The Paint Brush Art Community" at the "Consulate General of India", Dubai, United Arab Emirates</div>
            </li>
            <li className="border-b border-primary-100 pb-4">
              <div className="font-medium text-primary-900">Sept 2021</div>
              <div className="text-lg font-semibold">"On Reflection"</div>
              <div className="text-primary-600">group exhibition at Raw Coffee Company, Dubai, UAE</div>
            </li>
            <li className="border-b border-primary-100 pb-4">
              <div className="font-medium text-primary-900">Jun 2021</div>
              <div className="text-lg font-semibold">66th 'Students and Members Exhibition'</div>
              <div className="text-primary-600">at Gallery 76, Dubai International Art Centre, Dubai, UAE</div>
            </li>
            <li className="border-b border-primary-100 pb-4">
              <div className="font-medium text-primary-900">Apr 2021</div>
              <div className="text-lg font-semibold">"World Art Dubai"</div>
              <div className="text-primary-600">at World Trade Centre, Dubai, UAE</div>
            </li>
            <li className="border-b border-primary-100 pb-4">
              <div className="font-medium text-primary-900">Mar 2021</div>
              <div className="text-lg font-semibold">Modista Exhibition</div>
              <div className="text-primary-600">at Swissotel Al Murooj Dubai, UAE</div>
            </li>
            <li className="border-b border-primary-100 pb-4">
              <div className="font-medium text-primary-900">Mar 2021</div>
              <div className="text-lg font-semibold">"Choose to Challenge"</div>
              <div className="text-primary-600">International Women's day Exhibition, organized by Funun Arts, at Novotel World Trade Centre Dubai, UAE</div>
            </li>
            <li className="border-b border-primary-100 pb-4">
              <div className="font-medium text-primary-900">Jan 2021</div>
              <div className="text-lg font-semibold">Art Festival and Market day</div>
              <div className="text-primary-600">in Dubai International Art Center, Dubai, UAE</div>
            </li>
            <li className="border-b border-primary-100 pb-4">
              <div className="font-medium text-primary-900">Dec 2020</div>
              <div className="text-lg font-semibold">Solo exhibition with Arte Market Dubai</div>
              <div className="text-primary-600">Dubai, UAE</div>
            </li>
            <li className="border-b border-primary-100 pb-4">
              <div className="font-medium text-primary-900">Apr 2020 - May 2020</div>
              <div className="text-lg font-semibold">Salam Ramadan 2</div>
              <div className="text-primary-600">virtual art exhibition organized by Funun Arts where artists from different parts of the globe share their ways to welcome and celebrate Ramadan through Art, Dubai, UAE</div>
            </li>
            <li className="border-b border-primary-100 pb-4">
              <div className="font-medium text-primary-900">Mar 2020 - Apr 2020</div>
              <div className="text-lg font-semibold">"Live Limitless"</div>
              <div className="text-primary-600">a group Exhibition by Funun Arts, celebrating International Women's day 2020 #eachforequal, Dubai, UAE</div>
            </li>
            <li className="border-b border-primary-100 pb-4">
              <div className="font-medium text-primary-900">Dec 2019 - Jan 2020</div>
              <div className="text-lg font-semibold">"Year End Sale Exhibition"</div>
              <div className="text-primary-600">Art Smiley Exhibition, Double Tree by Hilton Hotel, Bay Square 5, Business Bay, Dubai, United Arab Emirates</div>
            </li>
            <li className="border-b border-primary-100 pb-4">
              <div className="font-medium text-primary-900">Nov-Dec / 2019</div>
              <div className="text-lg font-semibold">"Year of Tolerance 2019"</div>
              <div className="text-primary-600">Art Smiley Exhibition, Double Tree by Hilton Hotel, Bay Square 5, Business Bay, Dubai, United Arab Emirates</div>
            </li>
            <li className="border-b border-primary-100 pb-4">
              <div className="font-medium text-primary-900">Nov / 2019</div>
              <div className="text-lg font-semibold">'64nd Members' Art Exhibition'</div>
              <div className="text-primary-600">Gallery 76, Dubai International Art Centre, Dubai, United Arab Emirates</div>
            </li>
            <li className="border-b border-primary-100 pb-4">
              <div className="font-medium text-primary-900">March / 2019</div>
              <div className="text-lg font-semibold">Art Week</div>
              <div className="text-primary-600">16-23 March 2019, Gallery 76, Dubai International Art Centre, Dubai, United Arab Emirates</div>
            </li>
            <li className="border-b border-primary-100 pb-4">
              <div className="font-medium text-primary-900">November / 2018</div>
              <div className="text-lg font-semibold">'63rd Members' Art Exhibition'</div>
              <div className="text-primary-600">Gallery 76, Dubai International Art Centre, Dubai, United Arab Emirates</div>
            </li>
            <li className="border-b border-primary-100 pb-4">
              <div className="font-medium text-primary-900">July / 2018</div>
              <div className="text-lg font-semibold">'Summer exhibition'</div>
              <div className="text-primary-600">Gallery 76, Dubai International Art Centre, Dubai, United Arab Emirates</div>
            </li>
            <li className="border-b border-primary-100 pb-4">
              <div className="font-medium text-primary-900">May / 2018</div>
              <div className="text-lg font-semibold">'Student's Exhibition'</div>
              <div className="text-primary-600">Gallery 76, Dubai International Art Centre, Dubai, United Arab Emirates</div>
            </li>
            <li className="border-b border-primary-100 pb-4">
              <div className="font-medium text-primary-900">November / 2017</div>
              <div className="text-lg font-semibold">'62nd Members' Art Exhibition'</div>
              <div className="text-primary-600">Gallery 76, Dubai International Art Centre, Dubai, United Arab Emirates</div>
            </li>
            <li className="border-b border-primary-100 pb-4">
              <div className="font-medium text-primary-900">July / 2017</div>
              <div className="text-lg font-semibold">'Summer exhibition'</div>
              <div className="text-primary-600">Gallery 76, Dubai International Art Centre, Dubai, United Arab Emirates</div>
            </li>
            <li className="border-b border-primary-100 pb-4">
              <div className="font-medium text-primary-900">June / 2017</div>
              <div className="text-lg font-semibold">'Celebrating Ramadan'</div>
              <div className="text-primary-600">Gallery 76, Dubai International Art Centre, Dubai, United Arab Emirates</div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}