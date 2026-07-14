export function calculateStatistics(applications) {
  const total = applications.length;
  const applied = applications.filter((item) => item.status === 'Applied').length;
  const interviews = applications.filter((item) => item.status === 'Interview').length;
  const offers = applications.filter((item) => item.status === 'Offer').length;
  const rejected = applications.filter((item) => item.status === 'Rejected').length;

  return {
    total,
    applied,
    interviews,
    offers,
    rejected,
    successRate: total ? Math.round((offers / total) * 100) : 0,
  };
}
