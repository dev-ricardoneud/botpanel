import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { db } from '../../../lib/mysql';

export async function POST(req: Request) {
  const { username, password, firstName, lastName } = await req.json();

  if (!username || !password || !firstName || !lastName) {
    return NextResponse.json({ message: 'Alle velden zijn verplicht.' }, { status: 400 });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const [existingUser] = await db.execute('SELECT * FROM users WHERE username = ?', [username]);

    if (existingUser.length > 0) {
      return NextResponse.json({ message: 'Gebruikersnaam bestaat al.' }, { status: 400 });
    }

    const result = await db.execute(
      'INSERT INTO users (username, password, first_name, last_name, role) VALUES (?, ?, ?, ?, ?)',
      [username, hashedPassword, firstName, lastName, 'user']
    );

    return NextResponse.json({ message: 'Gebruiker succesvol geregistreerd.', success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Er is een fout opgetreden bij registratie.' }, { status: 500 });
  }
}
