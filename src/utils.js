import createBreakpoints from '@material-ui/core/styles/createBreakpoints';
const breakpoints = createBreakpoints({});

export const pxToRem =(value)=>`${value / 16}rem`

export const utils = {
  dateToMs: (date) => new Date(date).getTime(),
  responsiveFontSizes:({sm, md, lg})=>({
    [breakpoints.up('sm')]: { fontSize: pxToRem(sm) },
    [breakpoints.up('md')]: { fontSize: pxToRem(md) },
    [breakpoints.up('lg')]: { fontSize: pxToRem(lg) }
  })
}
