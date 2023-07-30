import {render, fireEvent, screen} from '@testing-library/svelte'

import Comp from './Button2.svelte'

test.only('shows proper heading when rendered', async() => {
  render(Comp, {name: 'World'})
  const heading = screen.getByText('Hello World!')
  await saveHTML()
  expect(heading).toBeInTheDocument()
  expect(fs.readFileSync('./image.png')).toMatchImageSnapshot()
})

test('changes button text on click', async () => {
  render(Comp, {name: 'World'})
  const button = screen.getByRole('button')
  await fireEvent.click(button)

  expect(button).toHaveTextContent('Button Clicked')
}, 20000)

import fs from 'node:fs'
// import { toPng } from 'html-to-image';
import nodeHtmlToImage from 'node-html-to-image'
async function saveHTML() {
  // const dataUrl = await toPng(document.documentElement)
  // fs.writeFileSync(
  //   './index.png',
  //   dataUrl.replace(/^data:image\/png;base64,/, ''),
  //   'base64',
  //   (err) => {
  //   if (err) throw err;
  //   console.log("The file was saved!");
  // });

  const html = document.documentElement.outerHTML

  await nodeHtmlToImage({
    output: './image.png',
    html
  })

  fs.writeFileSync(
    './index.html',
    document.documentElement.outerHTML,
  );
  console.log(html)
}

// export function createCacheFolderIfNeeded() {
//   if (!fs.existsSync(CACHE_FOLDER)) {
//     fs.mkdirSync(CACHE_FOLDER, {
//       recursive: true,
//     });
//   }
// }