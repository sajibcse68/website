'use server';

import { redirect } from 'next/navigation';

export default async function HomePage() {
  // for now redirect to my resume!
  redirect('/resume');
}
