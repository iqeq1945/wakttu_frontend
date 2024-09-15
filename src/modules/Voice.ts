import * as Voice from './voice.json';

const { woo, ine, jingburger, lilpa, jururu, gosegu, viichan } = Voice;

const Read = () =>
  console.log(woo, ine, jingburger, lilpa, jururu, gosegu, viichan);

const List = () => {
  const arr: { id: string; src: string }[] = [];
  woo.map((item) => {
    const obj = { ...item };
    arr.push(obj);
  });

  ine.map((item) => {
    const obj = { ...item };
    arr.push(obj);
  });
  jingburger.map((item) => {
    const obj = { ...item };
    arr.push(obj);
  });
  lilpa.map((item) => {
    const obj = { ...item };
    arr.push(obj);
  });
  jururu.map((item) => {
    const obj = { ...item };
    arr.push(obj);
  });
  gosegu.map((item) => {
    const obj = { ...item };
    arr.push(obj);
  });
  viichan.map((item) => {
    const obj = { ...item };
    arr.push(obj);
  });

  return arr;
};

const GetKey = (type: string, meta?: { [x: string]: any }) => {
  return meta ? (meta.bgm ? meta.bgm : getDefault(type)) : getDefault(type);
};

const getDefault = (type: string) => {
  switch (type) {
    case 'INE': {
      return 'i-1';
    }
    case 'JINGBURGER': {
      return 'ji-3';
    }
    case 'LILPA': {
      return 'l-3';
    }
    case 'JURURU': {
      return 'ju-2';
    }
    case 'GOSEGU': {
      return 'g-4';
    }
    case 'VIICHAN': {
      return 'v-7';
    }
    default: {
      return 'woo-2';
    }
  }
};

export { List, Read, GetKey };
