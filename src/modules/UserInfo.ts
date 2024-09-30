import { R2_URL } from '@/services/api';

export const getIcon = (score: number, provider?: string) => {
  if (provider === 'staff') return R2_URL + '/assets/icons/staff.svg';
  else if (provider === 'manager') return R2_URL + '/assets/icons/manager.svg';
  else {
    if (score < 1000) return R2_URL + '/assets/icons/ameba.svg';
    else if (score < 5000) return R2_URL + '/assets/icons/jindegi.svg';
    else if (score < 10000) return R2_URL + '/assets/icons/dakdoolgi.svg';
    else if (score < 25000) return R2_URL + '/assets/icons/wakmoosae.svg';
    else if (score < 50000) return R2_URL + '/assets/icons/chimpange.svg';
    else return R2_URL + '/assets/icons/nuguja.svg';
  }
};

export const getLevel = (score: number) => {
  return Math.floor(score / 1000);
};

export const getExp = (score: number) => {
  return score % 1000;
};

export const getCharacter = (
  character: {
    skin?: string;
    head?: string;
    hand?: string;
    eye?: string;
  } = { skin: 'S-1', head: '', hand: '', eye: '' }
) => {
  const { skin, head, hand, eye } = character;
  return {
    skin: getCharacterUrl(skin),
    head: getCharacterUrl(head),
    hand: getCharacterUrl(hand),
    eye: getCharacterUrl(eye),
  };
};

export const getUserDesc = (score: number, provider?: string) => {
  const icon = getIcon(score, provider);
  const level = getLevel(score);
  const exp = getExp(score);
  return { icon, level, exp };
};

const getCharacterUrl = (id?: string) =>
  id ? R2_URL + '/assets/items/' + id + '.svg' : undefined;
