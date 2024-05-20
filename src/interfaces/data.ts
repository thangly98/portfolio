export enum ELinkName {
  Facebook = 'facebook',
  Skype = 'skype',
  LinkedIn = 'linkedin',
  GitHub = 'github',
  Twitter = 'twitter',
}
export type ILink = { name: ELinkName; label: string; url: string }
