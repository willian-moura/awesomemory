import moment from 'moment'

export const getTimeDifferenceFormated = (
  startDate?: Date | null,
  endDate?: Date | null
): string => {
  if (!startDate) {
    return '0'
  }

  const sec = moment(endDate).diff(moment(startDate), 'seconds')
  const min = moment(endDate).diff(moment(startDate), 'minutes')
  const hour = moment(endDate).diff(moment(startDate), 'hours')

  let str = sec < 60 ? String(sec) : String(sec % 60).padStart(2, '0')

  if (min > 0) {
    str = `${String(min % 60).padStart(2, '0')}:` + str
  }

  if (hour > 0) {
    str = `${String(hour % 60).padStart(2, '0')}:` + str
  }

  return str
}
