const mail = require('@sendgrid/mail');

mail.setApiKey('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');

export default (req, res) => {
  const body = JSON.parse(req.body);

  const message = `
    Email: ${body.email}\r\n
    Name: ${body.name}\r\n
    Message: ${body.message}
  `;

  const data = {
    to: 'themanfrix@gmail.com',
    from: 'themanfrix@gmail.com',
    subject: 'Formularz na stronie',
    text: message,
    html: message.replace(/\r\n/g, '<br />'),
  }

  mail.send(data);

  res.status(200).json({ status: 'Ok' });
}