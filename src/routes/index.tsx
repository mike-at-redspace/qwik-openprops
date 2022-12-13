import { component$, useSignal } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  const count = useSignal(0);
  return (
    <>
      <form>
        <fieldset id="forms__input">
          <div> 
            <label for="input__name">Text Input</label>
            <input id="input__name" name="name" type="text" placeholder="lorem"/>
          </div>
          <div> 
            <label for="required__input__name">Required Text Input</label>
            <input id="required__input__name" name="name" type="text" required placeholder="ipsum"/>
          </div>
          <div>
            <label for="input__password">Password</label>
            <input id="input__password" type="password" autocomplete="new-password" placeholder="················"/>
          </div>
          <div>
            <label for="input__webaddress">Web Address</label>
            <input id="input__webaddress" type="url" placeholder="https://yoursite.com" autocomplete="url"/>
          </div>
          <div>
            <label for="input__emailaddress">Email Address</label>
            <input id="input__emailaddress" type="email" placeholder="name@email.com" autocomplete="email"/>
          </div>
          <div>
            <label for="input__search">Search</label>
            <input id="input__search" type="search" placeholder="Search for flavors" list="searches"/>
            <datalist id="searches">
              <option>Chocolate</option>
              <option>Vanilla</option>
              <option>Strawberry</option>
            </datalist>
          </div>
          <div>
            <label for="input__phone">Phone Number</label>
            <input id="input__phone" type="tel" inputMode="numeric" placeholder="999-999-9999" minLength={7} maxLength={12} pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"/>
          </div>
          <div>
            <label for="input__text2">Number Input</label>
            <input id="input__text2" type="number" placeholder="0-100" min="0" max="100"/>
          </div>
          <div>
            <label for="input__readonly">Read only</label>
            <input readOnly id="input__readonly" type="text" value="Nope!"/>
          </div>
          <div>
            <label for="input__disabled">Disabled</label>
            <input disabled id="input__disabled" type="text" value="Nope!"/>
          </div>
          <footer>
            <menu>
              <button type="reset">Reset</button>
            </menu>
            <menu>
              <button type="button">Cancel</button>
              <button>Submit</button>
            </menu>
          </footer>
          <legend>Input fields</legend>
        </fieldset>
      </form>
      <form>
        <fieldset id="forms__select">
          <div>
            <label for="select">Pick an option</label>
            <select id="select">
              <optgroup label="Option Group">
                <option>Option One</option>
                <option>Option Two</option>
                <option>Option Three</option>
              </optgroup>
            </select>
          </div>
          <legend>Select menus</legend>
        </fieldset>
      </form>
      <fieldset id="forms__checkbox">
        <legend>Checkboxes</legend>
        <ul class="list list--bare">
          <li><label for="checkbox1"><input id="checkbox1" name="checkbox" type="checkbox" checked /> Choice A</label></li>
          <li><label for="checkbox2"><input id="checkbox2" name="checkbox" type="checkbox"/> Choice B, something long enough to become multiline</label></li>
          <li><label for="checkbox3"><input id="checkbox3" name="checkbox" type="checkbox"/> Choice C</label></li>
        </ul>
      </fieldset>
      <fieldset id="forms__radio">
        <legend>Radio buttons</legend>
        <ul class="list list--bare">
          <li><label for="radio1"><input id="radio1" name="radio" type="radio" class="radio" checked/> Option 1</label></li>
          <li><label for="radio2"><input id="radio2" name="radio" type="radio" class="radio"/> Option 2, something long enough to become multiline</label></li>
          <li><label for="radio3"><input id="radio3" name="radio" type="radio" class="radio"/> Option 3</label></li>
        </ul>
      </fieldset>
      <fieldset id="forms__textareas">
        <legend>Textareas</legend>
        <textarea id="textarea" rows={8} cols={48} placeholder="Enter your message here"></textarea>
        <footer>
          <menu>
            <button type="reset">Clear</button>
          </menu>
          <menu>
            <button type="button">Cancel</button>
            <button>Send</button>
          </menu>
        </footer>
      </fieldset>
      
      <fieldset id="forms__alone-fieldset">
        <legend>Single</legend>
        <label for="list__autocomplete">Text autocomplete</label>
        <input type="text" id="list__autocomplete" list="searches"/>
      </fieldset>
      
      <form id="login"> 
        <fieldset id="signin__example">
          <div> 
            <label for="input__username">Username</label>
            <input id="input__username" name="username" type="text" required autoComplete="username" placeholder="mcgyver" pattern="^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$"/>
          </div>
          <div>
            <label for="input__password2">Password</label>
            <input id="input__password2" type="password" autoComplete="current-password" required placeholder="········" pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$" title="Uppercase, lowercase and a number are required"/>
          </div>
          <footer>
            <menu>
              <button>Login</button>
              <button type="reset">Clear</button>
            </menu>
          </footer>
          <legend>Sign In</legend>
        </fieldset>
      </form>
      
      <fieldset id="forms__html5">
        <legend>Inputs Extended</legend>
        <div>
          <label for="file-in">File input</label>
          <input type="file" id="file-in"/>
        </div>
        <div>
          <label for="ic">Color input</label>
          <input type="color" id="ic" value="#5c7cfa"/>
        </div>
        <div>
          <label for="ir">Range input</label>
          <input type="range" id="ir" value="10"/>
        </div>
        <div>
          <label for="ir">Progress element</label>
          <div>
            <progress></progress>
            <progress value=".5">50%</progress>
          </div>
        </div>
        <div>
          <label for="idd">Date input</label>
          <input type="date" id="idd" value="1970-01-01"/>
        </div>
        <div>
          <label for="idm">Month input</label>
          <input type="month" id="idm" value="1970-01"/>
        </div>
        <div>
          <label for="idw">Week input</label>
          <input type="week" id="idw" value="1970-W01"/>
        </div>
        <div>
          <label for="idtl">Datetime-local input</label>
          <input type="datetime-local" id="idtl" value="1970-01-01T00:00"/>
        </div>
      </fieldset>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik Demo',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
