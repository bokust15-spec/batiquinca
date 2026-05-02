/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Catalog } from './components/Catalog';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Catalog />
      <Contact />
      <Footer />
    </main>
  );
}
