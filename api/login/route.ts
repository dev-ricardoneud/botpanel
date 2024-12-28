import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { db } from '../../../lib/mysql';

export async function POST(req: Request) {
  const { username, password } = await req.json();

  try {
    const [rows]: any = await db.execute('SELECT * FROM users WHERE username = ?', [username]);

    if (rows.length === 0) {
      return NextResponse.json({ success: false, message: 'Gebruiker niet gevonden' });
    }

    const user = rows[0];

    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({ success: false, message: 'Wachtwoord is incorrect' });
    }
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Er is een fout opgetreden' });
  }
}
