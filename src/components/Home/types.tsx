export type BackgroundImagesPages = {
    profile: boolean;
    work: boolean;
    contact: boolean;
};

export type BackgroundImagesLocations = {
    nyc: boolean;
    stockholm: boolean;
    strasbourg: boolean;
    geneva: boolean;
    ottawa: boolean;
    hamilton: boolean;
    sf: boolean;
};

export type BackgroundImagesAll = BackgroundImagesLocations & BackgroundImagesPages;
