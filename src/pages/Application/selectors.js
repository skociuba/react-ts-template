import {createSelector} from 'reselect';

export const applicationSelector = (state) => state?.application || null;

export const paramsSelector = createSelector(applicationSelector, (app) => {
  const {params} = app?.config || {};
  if (!params) {
    return null;
  }
  const result = {
    locale: params.localeCode,
    opUnit: params.opUnit,
    channelID: params.channelID,
    channelCountryCode: params.channelCountryCode,
    channelGroupMemberID: params.channelGroupMemberID,
    channelBusinessLine: params.channelBusinessLine,
    displayTimeZone: params.displayTimeZone,
  };
  return result;
});
