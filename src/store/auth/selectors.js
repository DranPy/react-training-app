const context = 'auth';

export const getIsAuthorized = state => state[context].isAuthorized;

export const getIsLoading = state => state[context].isLoading;

export const getErrorMessage = state => state[context].errorMessage;
