import NextHead from 'next/head';

const head = () => {
  return (
    <NextHead>
      <title>flicksDb</title>
      <link rel='shortcut icon' href='/favicon.png' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <link
        href='https://fonts.googleapis.com/css?family=Rubik&display=swap'
        rel='stylesheet'
      />
      <link
        rel='stylesheet'
        href='https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css'
      />
    </NextHead>
  );
};

export default head;
