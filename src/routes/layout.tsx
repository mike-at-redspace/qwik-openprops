import { component$, Slot } from '@builder.io/qwik';
import Header from '../components/header/header';

export default component$(() => {
  const SectionStyles = {
    display: 'grid',
    placeContent: 'center',
    padding: 'var(--size-5)',
    gap: 'var(--size-7)'
  };

  return (
    <>
      <main>
        <Header />
        <section style={SectionStyles}>
          <Slot />
        </section>
      </main>
      <footer>
        <a href="//github.com/mike-at-redspace" target="_blank">
          Made with ♡ by mike-at-redspace using OpenProps & qwik
        </a>
      </footer>
    </>
  );
});
