//Question no 42 Great Magicians

function show_magicians(magicians: string[]): void {
  for (const magician of magicians) {
    console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
  }
}

function make_great(magicians: string[]): void {
  for (let i = 0; i < magicians.length; i++) {
    magicians[i] = magicians[i]  +  ' The graet';
  }
}

const magicians2: string[] = ["Ahmad", "Bilal", "Hunain"];
make_great(magicians2);
show_magicians(magicians2);
