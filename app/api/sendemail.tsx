import sgMail from '@sendgrid/mail';
import { NextApiRequest, NextApiResponse } from 'next';

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY as string;
sgMail.setApiKey(SENDGRID_API_KEY);

export default async function sendEmail(req: NextApiRequest, res: NextApiResponse) {
  const { name, email, message } = req.body;

  const content = {
    to: 'kylemthornton@gmail.com',
    from: email,
    subject: `New Message From - ${name}`,
    text: message,
    html: `<p>${message}</p>`,
    };
    try {
        await sgMail.send(content);
        res.status(200).send('Message sent successfully.');
    } catch (error) {
        console.log('ERROR', error);
        res.status(500).send('Error sending email.');
    }
};