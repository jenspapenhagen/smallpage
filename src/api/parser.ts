export type  Birdvoices = {
    'numRecordings': string;
    'numSpecies': string;
    'page': number;
    'numPages': number;
    'recordings': Recording[];
}

export type  Recording = {
    'id': string;
    'gen': string;
    'sp': string;
    'ssp': string;
    'en': string;
    'rec': string;
    'cnt': string;
    'loc': string | null;
    'lat': string | null;
    'lng': string | null;
    'alt': string;
    'type': string;
    'url': string;
    'file': string;
    'file-name': string;
    'sono': Sono;
    'lic': string;
    'q': string;
    'length': string;
    'time': string;
    'date': string;
    'uploaded': string;
    'also': string[];
    'rmk': string;
    'bird-seen': string;
    'playback-used': string;
}

export type  Sono = {
    'small': string;
    'med': string;
    'large': string;
    'full': string;
}



