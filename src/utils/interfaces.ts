
export interface IHeader {
    header: string;
  desc: string;
  desc_bottom: string;
  profile_photo?: string;
  buttons: { 
    contact_text: string;
    github_link: string; 
  }
}

export interface IProject {
  name: string;
  desc: string;
  demo_link: string;
  code_link: string;
  image: string;
}