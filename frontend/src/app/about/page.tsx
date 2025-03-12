'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Header } from '@components/layout/Header';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Timeline } from '@/components/timeline';
import { tailwindClasses as tc, cn } from '@/lib/utils/tailwind-classes';

// Import the original TimelineItem to keep compatibility
import { TimelineItem } from '@/components/timeline';

export default function About() {
  // State to track if we're showing all exhibitions
  const [showAllExhibitions, setShowAllExhibitions] = useState(false);

  // Toggle function for the exhibitions
  const toggleExhibitions = () => {
    setShowAllExhibitions((prev) => !prev);
  };

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row gap-8 mb-16 items-center">
          <div className="md:w-1/2">
            <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden shadow-lg bg-gray-200">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-gray-500">Artist Photo</span>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-gray-900">Radka Gicheva</h1>
            <h2 className="text-xl md:text-2xl font-sans text-gray-600 mb-6">
              Contemporary Abstract Artist | b. June 1, Plovdiv, Bulgaria
            </h2>
            <div className="prose max-w-none">
              <p className="text-lg leading-relaxed text-gray-700 font-sans">
                Born in the vibrant city of Plovdiv, Bulgaria, my connection to art was kindled at an early age. I recall
                picking up the paintbrush as a young child of five, and since then, my passion for painting has been
                unwavering.
              </p>
            </div>
          </div>
        </section>

        {/* Biography Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-serif font-bold mb-6 border-b pb-2 text-gray-900">Artist Statement</h2>
          <div className="prose max-w-none">
            <p className="mb-4 text-gray-700 font-sans">
              In May 2017, I became a proud member of the Dubai International Art Centre, marking a significant milestone
              in my artistic journey. Over the years, I have explored various subjects, from enchanting landscapes and
              tranquil still life to blooming flowers and spirited animals. However, it is through abstract art that I
              have found the most authentic expression of my inner world.
            </p>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="full-bio">
                <AccordionTrigger className="text-lg font-sans">Read Full Biography</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-4 text-gray-700 font-sans">
                    My artistic portfolio boasts a variety of group exhibitions, live art events, and workshops in diverse
                    locations including Dubai, Ras Al-Khaimah, Sharjah, and my home country, Bulgaria.
                  </p>
                  <p className="mb-4 text-gray-700 font-sans">
                    Abstract painting is the style that resonates most with my personality. I use this form and mixed
                    media art as a conduit to express my love for shapes, colors, and to communicate my unique vision as
                    an artist. My paintings are intuitive creations, birthed from several layers of paint, each adding
                    depth and complexity to the piece.
                  </p>
                  <p className="mb-4 text-gray-700 font-sans">
                    Acrylic paints, inks, and both soft and oil pastels are my preferred mediums. To create captivating
                    textures and achieve a rich, interesting interplay of effects in my paintings, I incorporate recycling
                    materials, fabrics, and everyday household items. This practice not only helps breathe new life into
                    discarded materials but also adds a unique dimension to each painting.
                  </p>
                  <p className="text-gray-700 font-sans">
                    Each of my creations is original, handmade, and carries its own distinct personality. To ensure
                    longevity, all of my paintings are signed on the front and back, and are meticulously finished with
                    two coats of varnish. This enhances the intensity, transparency, and luminosity of colors, offering an
                    immersive visual experience while protecting the integrity of the artwork.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Tabs Section for Education, Awards, etc. */}
        <section className="mb-16">
          <Tabs defaultValue="education" className="w-full">
            <div className="border-b border-gray-200">
              <TabsList className="mb-0 grid grid-cols-3">
                <TabsTrigger value="education">Education</TabsTrigger>
                <TabsTrigger value="awards">Awards & Membership</TabsTrigger>
                <TabsTrigger value="live-events">Live Art Events</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="education" className="space-y-4">
              <h3 className="text-2xl font-serif font-bold mb-4 text-gray-900">Education & Training</h3>
              <ul className="space-y-3 font-sans">
                <li className="flex gap-4">
                  <span className="font-medium min-w-[100px] text-gray-900">1990 - present</span>
                  <span className="text-gray-700">Self lessons</span>
                </li>
                <li className="flex gap-4">
                  <span className="font-medium min-w-[100px] text-gray-900">2003 - 2006</span>
                  <span className="text-gray-700">Art lessons in Studio Chaushev, Old town, Plovdiv, Bulgaria</span>
                </li>
                <li className="flex gap-4">
                  <span className="font-medium min-w-[100px] text-gray-900">2005 - 2010</span>
                  <span className="text-gray-700">Master in Geodesy in UACEG, Sofia, Bulgaria</span>
                </li>
                <li className="flex gap-4">
                  <span className="font-medium min-w-[100px] text-gray-900">2017 - 2020</span>
                  <span className="text-gray-700">Oil Classes in Dubai International Art Centre, Dubai, UAE</span>
                </li>
                <li className="flex gap-4">
                  <span className="font-medium min-w-[100px] text-gray-900">2019</span>
                  <span className="text-gray-700">Abstract and Mixed media classes in Dubai International Art Center</span>
                </li>
              </ul>
            </TabsContent>

            <TabsContent value="awards" className="space-y-4">
              <h3 className="text-2xl font-serif font-bold mb-4 text-gray-900">Awards</h3>
              <ul className="space-y-3 font-sans">
                <li className="flex flex-col">
                  <span className="font-medium text-gray-900">DIAC Merit Award - '62nd Members' Art Exhibition'</span>
                  <span className="text-gray-600">
                    November 2017 - Gallery 76, Dubai International Art Centre, Dubai, UAE
                  </span>
                </li>
                <li className="flex flex-col">
                  <span className="font-medium text-gray-900">DIAC Merit Award - '64nd Members' Art Exhibition'</span>
                  <span className="text-gray-600">
                    November 2019 - Gallery 76, Dubai International Art Centre, Dubai, UAE
                  </span>
                </li>
              </ul>

              <h3 className="text-2xl font-serif font-bold mt-8 mb-4 text-gray-900">Membership</h3>
              <p className="text-gray-700 font-sans">Since May 2017 - Member of Dubai International Art Centre, Dubai, United Arab Emirates</p>
            </TabsContent>

            <TabsContent value="live-events" className="space-y-4">
              <h3 className="text-2xl font-serif font-bold mb-4 text-gray-900">Live Art Events</h3>
              <ul className="space-y-4 font-sans">
                <li className="flex flex-col">
                  <span className="font-medium text-gray-900">Live Art with theme "Christmas"</span>
                  <span className="text-gray-600">
                    28th Dec 2019 - Sheraton Sharjah Beach Resort & Spa, organized by Art4You Gallery
                  </span>
                </li>
                <li className="flex flex-col">
                  <span className="font-medium text-gray-900">Live Art Event with theme "HOPE"</span>
                  <span className="text-gray-600">
                    17th Jan 2020 - Dubai Creek Park, organized by Art4You Gallery and The Paint Brush Community
                  </span>
                </li>
                <li className="flex flex-col">
                  <span className="font-medium text-gray-900">LIVE ART EVENT: "Be Mine Valentine", theme: Family Love</span>
                  <span className="text-gray-600">
                    14th Feb 2020 - Cassells Hotel, Al Barsha, Dubai, UAE, organized by Art4You Gallery
                  </span>
                </li>
                <li className="flex flex-col">
                  <span className="font-medium text-gray-900">
                    Live Art Event, part of Fine Arts Festival, Theme: Connected Communities
                  </span>
                  <span className="text-gray-600">
                    21st Feb 2020 - Ras Al Khaimah, UAE, organized by Art Noor, Funun Arts and Art4You Gallery
                  </span>
                </li>
                <li className="flex flex-col">
                  <span className="font-medium text-gray-900">Live Art Event: "Time to Hope & be Joyful"</span>
                  <span className="text-gray-600">
                    26th Dec 2020 - Novotel DWTC, Dubai, UAE, organized by Funun Arts Group
                  </span>
                </li>
              </ul>
            </TabsContent>
          </Tabs>
        </section>

        {/* Exhibitions Timeline */}
        <section>
          <h2 className="text-3xl font-serif font-bold mb-8 border-b pb-2 text-gray-900">Exhibitions & Recognition</h2>

          <Timeline>
            {/* Show first 5 exhibitions always */}
            {exhibitions.slice(0, 5).map((exhibition, index) => (
              <TimelineItem key={index} date={exhibition.date}>
                <Card>
                  <CardContent>
                    <h3 className="font-bold text-lg text-gray-900">{exhibition.title}</h3>
                    <p className="text-gray-600 font-sans">{exhibition.location}</p>
                  </CardContent>
                </Card>
              </TimelineItem>
            ))}

            {/* Show remaining exhibitions only when expanded */}
            {showAllExhibitions &&
              exhibitions.slice(5).map((exhibition, index) => (
                <TimelineItem key={index + 5} date={exhibition.date}>
                  <Card>
                    <CardContent>
                      <h3 className="font-bold text-lg text-gray-900">{exhibition.title}</h3>
                      <p className="text-gray-600 font-sans">{exhibition.location}</p>
                    </CardContent>
                  </Card>
                </TimelineItem>
              ))}
          </Timeline>

          {/* View All button at the bottom */}
          {exhibitions.length > 5 && (
            <div className="flex justify-center mt-8">
              <Button onClick={toggleExhibitions} variant="outline" className="px-6 font-sans">
                {showAllExhibitions ? "Show Recent Exhibitions" : "View All Exhibitions"}
              </Button>
            </div>
          )}
        </section>
      </main>
    </>
  );
}

// Exhibition data
const exhibitions = [
  {
    date: "Feb 2025",
    title: 'Solo exhibition "Artist in residence"',
    location: "La Brocante furniture store, Al Quoz, Dubai, UAE",
  },
  {
    date: "Feb 2025",
    title: "Group exhibition",
    location: "organized by Artezaar at More Cafe, Dubai World Trade Centre - The Offices 1, One Central - Dubai, UAE",
  },
  {
    date: "Sept 2024",
    title: "#Iampeace, Global Peace Conference",
    location: "group exhibition at Etisalat Academy Auditorium, Muhaisnah Dubai, UAE",
  },
  {
    date: "June 2024",
    title: '"Summer Hues"',
    location: "online exhibition organized by Artezaar, Dubai, UAE",
  },
  {
    date: "May 2024",
    title: '"Blossom and Brushstrokes: A summer Exhibit"',
    location: "online exhibition organized by Artezaar, Dubai, UAE",
  },
  {
    date: "Oct 2023",
    title: "Global Expressions: A Fusion of cultures in Art",
    location: "organized by Dubai International Art Centre, Embassy of India, Abu Dhabi, UAE",
  },
  {
    date: "Sept 2023",
    title: '"The Showroom by DIPR"',
    location: "Anantara Downtown hotel, Dubai, UAE",
  },
  {
    date: "Aug 2023",
    title: '"Collectible creation exhibition"',
    location: "online exhibition organized by Artezaar, Dubai, UAE",
  },
  {
    date: "June 2023",
    title: '"Summer Hues"',
    location: "group exhibition at Bedia Art gallery, Dubai, UAE",
  },
  {
    date: "Mar 2022",
    title: "Artist in residence",
    location: "at La Brocante DXB, Dubai, UAE",
  },
  {
    date: "Dec 2021",
    title: '"Empower"',
    location: "group exhibition at Raw Coffee Company, Dubai, UAE",
  },
  {
    date: "Nov 2021",
    title: "Solo Art Exhibition",
    location: "Pottery Barn, Dubai Mall, Dubai, UAE",
  },
  {
    date: "Nov 2021",
    title: '"INDRADHANUSH"',
    location:
      'group exhibition and walk art organized by "The Paint Brush Art Community" at the "Consulate General of India", Dubai, UAE',
  },
  {
    date: "Sept 2021",
    title: '"On Reflection"',
    location: "group exhibition at Raw Coffee Company, Dubai, UAE",
  },
  {
    date: "Jun 2021",
    title: "66th 'Students and Members Exhibition'",
    location: "at Gallery 76, Dubai International Art Centre, Dubai, UAE",
  },
];