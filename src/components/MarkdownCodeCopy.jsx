import React, {useEffect} from 'react';

export default function MarkdownCodeCopy() {
  async function copyCode(block, button) {
    let code = block.querySelector("code");
    let text = code.innerText;

    await navigator.clipboard.writeText(text);
  }

  function wrapCode(block, button) {
    let code = block.querySelector("code");

    if(isWrappedCode(block)) {
      code.style = ""
      button.innerHTML = 
        "      <path class=\"stroke-current text-gray-300 fill-gray-300\" fill=\"currentColor\"\n" +
        "            d=\"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z\"></path>"
    }
    else {
      code.style = "white-space: pre-wrap; overflow-wrap: anywhere;"
      button.innerHTML = "<path class=\"stroke-current text-cyan-400 fill-cyan-400\" fill=\"currentColor\"\n" +
        "            d=\"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z\"></path>"
    }
  }

  /*
  <button type="button" className="clean-btn" aria-label="Toggle word wrap" title="Toggle word wrap">
    <svg className="wordWrapButtonIcon_Bwma" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor"
            d="M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"></path>
    </svg>
  </button>
  
  <button type="button" aria-label="Copy code to clipboard" title="Copy" className="clean-btn">
  <span
    className="copyButtonIcons_eSgA" aria-hidden="true"><svg className="copyButtonIcon_y97N" viewBox="0 0 24 24"><path
    d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"></path></svg><svg
    className="copyButtonSuccessIcon_LjdS" viewBox="0 0 24 24"><path
    d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"></path></svg>
    </span></button>
  */
  
  
  function isWrappedCode(block){
    let code = block.querySelector("code");
    return code.style && code.style.cssText.includes("pre-wrap")
  }
  
  function createWrapButton(codeBlock){
    let copyButton = document.createElement("button");
    copyButton.title = "Toggle word wrap"
    copyButton.innerHTML = "<svg className=\"wordWrapButtonIcon_Bwma\" viewBox=\"0 0 24 24\" aria-hidden=\"true\">\n" +
      "      <path class=\"stroke-current text-gray-300\" fill=\"currentColor\"\n" +
      "            d=\"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z\"></path>\n" +
      "    </svg>"
    copyButton.className = "copy-code";
    copyButton.style.width = "32px"
    copyButton.style.height = "32px"
    
    copyButton.addEventListener("click", async () => {
      wrapCode(codeBlock, copyButton);
      // await copyCode(codeBlock, copyButton);
    });
    
    return copyButton
  }

  function createCopyButton(codeBlock){
    let copyButton = document.createElement("button");
    copyButton.title = "Copy code"
    copyButton.innerHTML = "<svg className=\"copyButtonIcon_y97N\" viewBox=\"0 0 24 24\"><path class=\"stroke-current text-gray-100\" \n" +
      "    d=\"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z\"></path></svg>"
    // copyButton.innerHTML = "<svg className=\"copyButtonIcon_y97N\" viewBox=\"0 0 24 24\"><path class=\"stroke-current text-gray-100\" \n" +
    //   "    d=\"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z\"></path></svg>"
    copyButton.className = "copy-code";
    copyButton.style.width = "32px"
    copyButton.style.height = "32px"

    copyButton.addEventListener("click", async () => {
      setTimeout(() => {
        copyButton.innerHTML = "<svg\n" +
          "    className=\"copyButtonSuccessIcon_LjdS\" viewBox=\"0 0 24 24\"><path class=\"stroke-current text-gray-100\" \n" +
          "    d=\"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z\"></path></svg>";
      }, 100);
      
      setTimeout(() => {
        copyButton.innerHTML = "<svg className=\"copyButtonIcon_y97N\" viewBox=\"0 0 24 24\"><path class=\"stroke-current text-gray-100\" \n" +
          "    d=\"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z\"></path></svg>";
      }, 1500);
      
      await copyCode(codeBlock, copyButton);
    });
    
    return copyButton
  }

  function htmlToElement(html) {
    var template = document.createElement('template');
    html = html.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = html;
    return template.content.firstChild;
  }
  
  function createCodeBlockButtons(codeBlock){
    
    let wrapper = document.createElement("div");
    wrapper.style.position = "relative";
    codeBlock.parentNode.insertBefore(wrapper, codeBlock);
    wrapper.appendChild(codeBlock);
    let buttonContainer = document.createElement("div");
    buttonContainer.style.position = "absolute"
    // buttonContainer.style.border = "1px red dotted"
    buttonContainer.style.top = "0"
    buttonContainer.style.right = "0"
    
    // buttonContainer.className = "w-full h-8"
    // buttonContainer.style.height = "20px"
    
    buttonContainer.style.top = "0"
    buttonContainer.innerHTML = "<div class=\"flex flex-row mr-1 mt-1\"></div>"
    
    const copySvg = htmlToElement("      <svg class='rounded w-8 h-8 p-2 ml-1 border border-neutral-700 border-solid bg-neutral-500 hover:bg-neutral-700' viewBox=\"0 0 24 24\">\n" +
      "        <path class=\"stroke-current text-gray-300 fill-gray-300\" d=\"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z\"></path>\n" +
      "      </svg>\n")
    
    copySvg.addEventListener("click", async () => {
      setTimeout(() => {
        copySvg.innerHTML = "<path class=\"stroke-current text-gray-300 fill-gray-300\" \n" +
          "    d=\"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z\"></path>";
      }, 100);

      setTimeout(() => {
        copySvg.innerHTML = "<path class=\"stroke-current text-gray-300 fill-gray-300\" \n" +
          "    d=\"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z\"></path>";
      }, 1500);

      await copyCode(codeBlock, copySvg);
    });

    buttonContainer.firstChild.appendChild(copySvg)
    
    console.log("codeBlock.scrollWidth", codeBlock.scrollWidth, "codeBlock.offsetWidth", codeBlock.offsetWidth)
    const needsWrap = codeBlock.scrollWidth > codeBlock.offsetWidth
    
    if(needsWrap) {
      const wrapSvg = htmlToElement("      <svg class='rounded w-8 h-8 p-2 ml-1 border border-neutral-700 border-solid bg-neutral-500 hover:bg-neutral-700' viewBox=\"0 0 24 24\" aria-hidden=\"true\">\n" +
        "        <path class=\"stroke-current text-gray-300 fill-gray-300\" fill=\"currentColor\" d=\"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z\"></path>\n" +
        "      </svg>\n")
      

      wrapSvg.addEventListener("click", async () => {
        wrapCode(codeBlock, wrapSvg);
        // await copyCode(codeBlock, copyButton);
      });

      buttonContainer.firstChild.appendChild(wrapSvg)
    }
    
    // codeBlock.style.position = "relative"
    // codeBlock.style.border = "2px blue dotted"
    codeBlock.appendChild(buttonContainer)  
    // codeBlock.setAttribute("tabindex", "0");
    // buttonContainer.appendChild(createWrapButton(codeBlock));
    // buttonContainer.appendChild(createCopyButton(codeBlock));
    
    
  }
  
  useEffect(()=>{
    const codes = document.getElementsByClassName("astro-code");
    for (let i = 0; i < codes.length; i++) {
      const codeBlock = codes.item(i)
      createCodeBlockButtons(codeBlock)
      
    }
    
  }, [])
  return (
    <></>
  );
}
