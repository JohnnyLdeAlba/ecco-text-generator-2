import { useEffect, createContext, useContext, useState } from "react";
import { t_hook } from "../lib/hook";

class t_ecco_text extends t_hook {

  font;
  keyboardLayout;
  menuVisible;

  loadedModules;

  constructor() {

    super();

    this.state = "init";

    this.font = null;
    this.keyboardLayout = '';
    this.aboutVisible = false;
    this.menuVisible = false;

    this.loadedModules = new Map();

    this.loadedModules.set("eccoText", null);
    this.loadedModules.set("canvas", null);
    this.loadedModules.set("requestStatic", null);
  }

  set(params) {

    const { progma, refresh } = params;

    this.progma = progma;
    this.refresh = refresh;

    progma.set("keyboardLayouts",
      galleryItem => this.onKBLayoutChange(galleryItem));
    progma.set("aboutVisible",
      galleryItem => this.showAbout(true));

    progma.set("onSync",
      (module, onReady) => 
        this.onSync(module, onReady)
    );
  }

  showAbout(visible) {

    this.aboutVisible = visible;
    this.commit();
  }

  initialize(params) {

    const { progma } = params;

    this.setKBLayout("engKeyboard");

    this.state = "ready";

    this.disableAutoCommit();
    this.commit();

    this.onSync("eccoText", () => {});
  }

  process(params) {

    switch (this.state) {

      case "init": {
        this.initialize(params);
        break;
      }
    }
  }

  onFontChange(font) {

    if (font == this.font)
      return;
    
    if (this.font == null || font.type != this.font.type)
      this.setKBLayout("engKeyboard");

    this.font = font;
    this.commit();
  }

  onSync(module, onReady) {

    let totalModules = 0;

    this.loadedModules.set(module, onReady);
    this.loadedModules.forEach((value, key) => {

      if (value)  
        totalModules++;
    });

    if (totalModules < this.loadedModules.size)
      return;

    this.loadedModules.forEach(
      (onReady, key) => onReady()
    );

    this.pushUpdate();
    this.update();
  }

  showMenu() {

    this.menuVisible = true;
    this.commit();
  }

  onMenuClose() {

    this.menuVisible = false;
    this.commit();
  }

  setKBLayout(keyboardLayout) {

    if (this.keyboardLayout == keyboardLayout)
      return;

    this.progma.removeAllSelectedItems("keyboardLayouts")
    this.progma.addSelectedItem("keyboardLayouts", keyboardLayout);    

    this.keyboardLayout = keyboardLayout;
    this.commit();
  }

  onKBLayoutChange(galleryItem) {
    this.setKBLayout(galleryItem.hash);
  }
}

export const EccoTextContext = createContext(new t_ecco_text());

export const useEccoText = ({ progma }) => {

  const eccoText = useContext(EccoTextContext);
  const [ serial, setSerial ] = useState(0);

  eccoText.set({
    progma: progma,
    refresh: () => setSerial(serial + 1)
  });

  useEffect(() => {
    eccoText.process({ progma: progma })
  });

  return eccoText;
}

export default useEccoText;
