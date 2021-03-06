import fairyGrow from '../../data/fairyGrow.json';

export default function getFairy(fairy) {
  return {
    ...fairy,
    getStats(options = {}) {
      const {level = 100, quality = 5} = options;
      const {stats: baseStats, grow} = fairy;
      const stats = {};
      
      Object.entries(baseStats).forEach(([key, baseStat]) => {
        const {[key]: [statRatio, levelRatio], proportion} = fairyGrow;
        
        stats[key] = Number(Math.ceil((statRatio * (baseStat / 100)) + Math.ceil(((level - 1) * levelRatio) * (baseStat / 100) * (grow / 100))) * proportion[quality - 1]);
      });
      
      return stats;
    },
  };
}
