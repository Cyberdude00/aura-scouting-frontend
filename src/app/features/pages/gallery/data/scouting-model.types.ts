export interface ScoutingModel {
  name: string;
  gender?: string;
  photo: string;
  height?: string;
  measurements?: string;
  hair?: string;
  eyes?: string;
  shoe?: string;
  bookAura?: string[];
  bookExtra?: string[];
  snapsSelect?: string[];
  snapsExtra?: string[];
  videos?: string[];
  fullMaterialData?: FullMaterialMedia;
  portfolio?: string[];
  instagram?: string[];
}

export interface FullMaterialMedia {
  bookExtra?: string[];
  snapsSelect?: string[];
  snapsExtra?: string[];
  videos?: string[];
}

export interface GalleryModel {
  id: string;
  name: string;
  gender?: string;
  cover: string;
  height?: string;
  measurements?: string;
  hair?: string;
  eyes?: string;
  shoe?: string;
  ongoingTrip: boolean;
  fullMaterial?: boolean;
  fullMaterialMedia?: string[];
  portfolio: string[];
  instagram: string[];
  bookAura?: string[];
  bookExtra?: string[];
  snapsSelect?: string[];
  snapsExtra?: string[];
  videos?: string[];
}

export interface GalleryGroup {
  galleryKey: string;
  galleryName: string;
  models: GalleryModel[];
}
