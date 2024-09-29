import data from '@/modules/Voice.json';
import { R2_URL } from '@/services/api';

const { woo, ine, jingburger, lilpa, jururu, gosegu, viichan } = data;

const Read = () =>
  console.log(woo, ine, jingburger, lilpa, jururu, gosegu, viichan);

const List = () => {
  const arr: { id: string; src: string }[] = [];
  woo.map((item: { id: string; src?: string }) => {
    const obj = {
      id: item.id,
      src: item.src ? item.src : R2_URL + `/assets/voice/woo/${item.id}.webm`,
    };
    arr.push(obj);
  });

  ine.map((item: { id: string; src?: string }) => {
    const obj = {
      id: item.id,
      src: item.src ? item.src : R2_URL + `/assets/voice/ine/${item.id}.webm`,
    };
    arr.push(obj);
  });

  jingburger.map((item: { id: string; src?: string }) => {
    const obj = {
      id: item.id,
      src: item.src
        ? item.src
        : R2_URL + `/assets/voice/jingburger/${item.id}.webm`,
    };
    arr.push(obj);
  });

  lilpa.map((item: { id: string; src?: string }) => {
    const obj = {
      id: item.id,
      src: item.src ? item.src : R2_URL + `/assets/voice/lilpa/${item.id}.webm`,
    };
    arr.push(obj);
  });

  jururu.map((item: { id: string; src?: string }) => {
    const obj = {
      id: item.id,
      src: item.src
        ? item.src
        : R2_URL + `/assets/voice/jururu/${item.id}.webm`,
    };
    arr.push(obj);
  });

  gosegu.map((item: { id: string; src?: string }) => {
    const obj = {
      id: item.id,
      src: item.src
        ? item.src
        : R2_URL + `/assets/voice/gosegu/${item.id}.webm`,
    };
    arr.push(obj);
  });

  viichan.map((item: { id: string; src?: string }) => {
    const obj = {
      id: item.id,
      src: item.src
        ? item.src
        : R2_URL + `/assets/voice/viichan/${item.id}.webm`,
    };
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
