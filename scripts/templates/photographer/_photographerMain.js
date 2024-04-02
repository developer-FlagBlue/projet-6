// import { photographerTemplate } from './../accueil/index.js';
import { _lightboxModal } from './_photographerMainPart/_lightboxModal.js';
import { _ProfilePartiale } from './_photographerMainPart/_ProfilePartiale.js';
import { _likeTotalPartiale } from './_photographerMainPart/_likeTotalPartiale.js';
import { _sortSelectGalleryPartiale } from './_photographerMainPart/_sortSelectGalleryPartiale.js';

//main part
export const _mainSection = (mediasData, phData) => {

	//part 1
	_ProfilePartiale(phData);

	//part 2
	_sortSelectGalleryPartiale(mediasData, phData);

	//part 3
	_likeTotalPartiale(mediasData, phData)



};

