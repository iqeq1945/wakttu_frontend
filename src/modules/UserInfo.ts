export const getIcon = (score: number, provider = null) => {
  if (provider === 'wakttu') {
    switch (provider) {
      case 'staff': {
        return '/assets/icons/staff.svg';
      }
      case 'manager': {
        return '/assets/icons/manager.svg';
      }
      default: {
        return '/assets/icons/amoeba.svg';
      }
    }
  }
  if (score < 1000) return '/assets/icons/amoeba.svg';
  else if (score < 5000) return '/assets/icons/jindegi.svg';
  else if (score < 10000) return '/assets/icons/dakdoolgi.svg';
  else if (score < 25000) return '/assets/icons/wakmoosae.svg';
  else if (score < 50000) return '/assets/icons/chimpange.svg';
  else return '/assets/icons/nuguja.svg';
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
