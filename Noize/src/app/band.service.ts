import { Injectable } from '@angular/core';

import {Band} from './band';
import {BANDS} from './mock-bands'

@Injectable()
export class BandService {
    getBands(): Promise<Band[]>{
        return Promise.resolve(BANDS);
    }
}