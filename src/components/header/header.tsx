import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { QwikLogo } from '../icons/qwik';
import styles from './header.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <header>
      <h3>Example Vanilla Form</h3>
      <p>With just the import from Open Props, no additional classes, have great looking forms.</p>
    </header>
  );
});
