import { R2_URL } from '@/services/api';

export const getIcon = (score: number, provider = null) => {
  if (provider === 'wakttu') {
    switch (provider) {
      case 'staff': {
        return R2_URL + '/assets/icons/staff.svg';
      }
      case 'manager': {
        return R2_URL + '/assets/icons/manager.svg';
      }
      default: {
        return R2_URL + '/assets/icons/amoeba.svg';
      }
    }
  }
  if (score < 1000) return R2_URL + '/assets/icons/amoeba.svg';
  else if (score < 5000) return R2_URL + '/assets/icons/jindegi.svg';
  else if (score < 10000) return R2_URL + '/assets/icons/dakdoolgi.svg';
  else if (score < 25000) return R2_URL + '/assets/icons/wakmoosae.svg';
  else if (score < 50000) return R2_URL + '/assets/icons/chimpange.svg';
  else return R2_URL + '/assets/icons/nuguja.svg';
};

export const getLevel = (score: number) => {
  return Math.floor(score / 1000);
};

export const getExp = (score: number) => {
  return score % 1000;
};

export const getUserDesc = (score: number, provider = null) => {
  const icon = getIcon(score, provider);
  const level = getLevel(score);
  const exp = getExp(score);
  return { icon, level, exp };
};
