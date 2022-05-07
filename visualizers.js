// Using Kazuki Umeda's 3D shapes and some common math objects

class SphereVisualizer {
  constructor() {
    this.density = 30;
    this.r = 200;
  }
  
  setDensity(dVal) {
    this.density = dVal;
  }
  
  spawn(wave) {
    for(let phi=0; phi < 180; phi +=180/this.density) {
      beginShape();
      for(let theta = 0; theta < 360; theta += 360/this.density) {
        this.r = map(wave[theta], -1, 1, 200, 400);
        
        let x = this.r * cos(phi);
        let y = this.r * sin(phi) * sin(theta);
        let z = this.r * sin(phi) * cos(theta);

        vertex(x,y,z);
      }
      endShape(CLOSE);
    }
  }
}

class NoodleSphereVisualizer {
  constructor() {
    this.density = 30;
    this.r = 200;
  }
  
  setDensity(dVal) {
    this.density = dVal;
  }
  
  spawn(wave) {
    const thetaBound = (val) => {
      let roundedVal = Math.floor(val) % (wave.length - 1);
      let output = map(wave[roundedVal], -1, 1, 0, 180);
      return output;
    }
    
    this.density = map(wave[0], -1, 1, 15, 45);
    beginShape();
    for(let theta = 0; theta < 180; theta += 0.1) {
      let x = this.r * cos(theta);
      let y = this.r * sin(theta) * sin(theta*this.density);
      let z = this.r * sin(theta) * cos(theta*this.density);
      vertex(x,y,z);
    }
    endShape(LINES);
  }
}

class LissajousVisualizer {
  constructor() {
    this.r = 200;
    this.density = 22;
    this.freq = 6
  }

  setDensity(dVal) {
    this.density = dVal;
  }

  spawn(wave) {
    beginShape();
    this.freq = map(wave[0], -1, 1, 0, 8);
    for(let theta = 0; theta < 180; theta += 0.1) {
      let x = this.r * cos(theta*this.freq);
      let y = this.r * sin(theta*this.freq) * sin(theta*5);
      let z = this.r * sin(theta*this.freq) * cos(theta*5);
      vertex(x,y,z);
    }
    endShape(LINES);
  }
}

class AnamorphicSphere {
  constructor() {
    this.density = 0.2
    this.r = 200;
  }

  setDensity(dVal) {
    this.density = dVal;
  }

  spawn(wave) {
    for(let phi=0; phi < 180; phi += 2) {
      beginShape(POINTS);
      for(let theta = 0; theta < 360; theta += 2) {
        this.density = map(wave[theta], -1, 1, 0.2, 0.8);
        
        let x = this.r * (1+this.density*sin(theta*6) * sin(phi*5)) * cos(phi);
        let y = this.r * (1+this.density*sin(theta*6) * sin(phi*5)) * sin(phi) * sin(theta);
        let z = this.r * (1+this.density*sin(theta*6) * sin(phi*5)) * sin(phi) * cos(theta);

        vertex(x,y,z);
      }
      endShape();
    }
  }
}

class GalaxyVisualizer {
  constructor() {
    this.density = 0.2
    this.r = 50;
  }

  setDensity(dVal) {
    this.density = dVal;
  }

  spawn(wave) {
    for(let phi=0; phi < 180; phi += 2) {
      beginShape(POINTS);
      for(let theta = 0; theta < 360; theta += 2) {
        this.density = map(wave[theta], -1, 1, 0.2, 0.8);
        
        let x = this.r * (1+this.density*sin(theta*6) * sin(phi*5)) * cos(phi);
        let y = this.r * (1+this.density*sin(theta*6) * sin(phi*5)) * tan(phi) * sin(theta);
        let z = this.r * (1+this.density*sin(theta*6) * sin(phi*5)) * tan(phi) * cos(theta);

        vertex(x,y,z);
      }
      endShape();
    }
  }
}

class BiconalVisualizer {
  constructor() {
    this.density = 0.2
    this.r = 50;
  }

  setDensity(dVal) {
    this.density = dVal;
  }

  spawn(wave) {
    for(let phi=0; phi < 180; phi += 2) {
      beginShape(POINTS);
      for(let theta = 0; theta < 360; theta += 2) {
        this.density = map(wave[theta], -1, 1, 0.2, 0.8);
        
        let x = this.r * (1+this.density*sin(theta*6) * sin(phi*5)) * tan(phi);
        let y = this.r * (1+this.density*sin(theta*6) * sin(phi*5)) * tan(phi) * sin(theta);
        let z = this.r * (1+this.density*sin(theta*6) * sin(phi*5)) * tan(phi) * cos(theta);

        vertex(x,y,z);
      }
      endShape();
    }
  }
}

class SauronVisualizer {
  constructor() {
    this.density = 0.2
    this.r = 200;
  }

  setDensity(dVal) {
    this.density = dVal;
  }

  spawn(wave) {
    for(let phi=0; phi < 180; phi += 2) {
      beginShape(POINTS);
      for(let theta = 0; theta < 360; theta += 2) {
        let entropy = map(wave[theta], -1, 1, 3, 6);
        
        let x = this.r * (1+this.density*tan(theta*entropy) * sin(phi*5)) * cos(phi);
        let y = this.r * (1+this.density*tan(theta*entropy) * sin(phi*5)) * sin(phi) * sin(theta);
        let z = this.r * (1+this.density*tan(theta*entropy) * sin(phi*5)) * sin(phi) * cos(theta);

        vertex(x,y,z);
      }
      endShape();
    }
  }
}