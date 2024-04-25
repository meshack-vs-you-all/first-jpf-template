import {Hero,Benefits,FirstTimers,Footer,WhatWeOffer,WhoWeAre,WhyChooseUs,CallToAction} from './sections'
import Nav from './components/Nav'
const App = () => (
  <main className="relative w-full h-screen ">{/**I changed the padding to 20px all around and the margin right to 0 */}
    <Nav /> 
    <section className=""><Hero /></section>
    <section className='padding'><WhoWeAre /></section>
    <section className='padding-x py-10'><WhatWeOffer /></section>
    <section className='padding'><FirstTimers /></section>
    <section className='padding'><Benefits /></section>
    <section className='padding'><WhyChooseUs /></section>
    <section className='padding'><CallToAction /></section>
    <section className='bg-black padding-x padding-t pb-8'><Footer /></section>

  </main>
);

export default App