number_of_champions = 134

for x in range(number_of_champions): #for now
  n = raw_input().split("/")
  
  champion = ""
  current_value = ""
  counter = 0
  
  while current_value != ".":
    current_value = n[1][counter]
    champion += current_value
    counter += 1
    
  print "<img id=\"" + champion[:-1] + "\" src=\"" + "images/" + champion[:-1] + ".png\">" 