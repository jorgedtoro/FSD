function likes(names) {
  
  let ret;

  switch (names.length) {
    case 0:
      ret = "no one likes this";
      break;
    case 1:
      ret = names[0] + " likes this";
      break;
    case 2:
      ret = names[0] + " and " +  names[1] + " like this";
      break;
    case 3:
      // ret = names[0] + ", " + names[1] + " and " + names[2] + " likes this";
      ret = `${names[0]}, ${names[1]} and ${names[2]} like this`; // template string
      break;
    default:
      ret = `${names[0]}, ${names[1]} and ${names.length - 2} others like this`; // Alex, Jacob and 2 others like this
  }
  
  return ret;
}

likes([]); // no one likes this
likes(['Peter']); // Peter likes this
likes(['Jacob', 'Alex']); // Jacob and Alex like this
likes(['Max', 'John', 'Mark']); // Max, John and Mark like this
likes(['Alex', 'Jacob', 'Mark', 'Max'])