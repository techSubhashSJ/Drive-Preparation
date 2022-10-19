import _ from 'lodash';

export const getPreviewRedirectUrl = ( postType = '', previewPostId = '' ) => {

	if ( _.isEmpty( postType ) || _.isEmpty( previewPostId ) ) {
		return '';
	}

	switch ( postType ) {
	case 'post':
		return `/blog/preview/${previewPostId}/`;
	case 'page':
		return `/page/preview/${previewPostId}/`;
	default:
		return '/';
	}
};

export const getLoginPreviewRedirectUrl = ( postType = '', previewPostId = '' ) => {
	return `/login/?postType=${postType || ''}&previewPostId=${previewPostId || ''}`;
};