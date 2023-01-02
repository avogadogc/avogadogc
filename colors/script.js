{ // Highlight today
  var date = new Date();
  var m = date.getMonth() + 1;
  var d = date.getDate();
  let todays = document.querySelectorAll("tr:nth-of-type("+(m+2)+") td:nth-of-type("+(d+1)+"")
  for (today of todays) {
    today.style.backgroundColor = '#ada'
  }
}


let cals = ['t3', 'five', 'mystery', 'multi', 'micro', 'small', 'regular']
for (cal of cals) {
  // from third row and second column
  let cells = document.querySelectorAll('div.' + cal + ' tr:nth-child(n + 3) td:nth-child(n + 2)')
  if (cells.length != 31*12) {
    console.log("Unexpected table for " + cal)
  }
  // Update the content
  // Move the missing/done indication to html class
  for (cell of cells) {
    // No such day: Fed 31, etc.
    if (cell.textContent === 'X') {
      newClass = "not-a-day"
      cell.innerHTML = ''
    // Error
    } else if (cell.children.length != 1) {
      console.log("Unexpected cell: " + cell.outerHTML)
      continue
    } else {
      let child = cell.children[0]
      switch (child.tagName) {
        case 'SPAN':
          newClass = "missing"
          switch (cal) {
            case "mystery":
            case "multi":
              // Image added by CSS
              cell.innerHTML = ''
            break;
            case "t3":
              cell.innerHTML = 'T'
            break;
            case "micro":
              cell.innerHTML = 'M'
            break;
            case "small":
              cell.innerHTML = 'S'
            break;
            case "regular":
              cell.innerHTML = 'R'
            break;
            default:
              // Everyday five - keep number
            break;
          }
        break;
        case 'IMG':
          newClass = "done"
          cell.innerHTML = '' // Remove content so dones are blank
        break;
        default: // Error
          console.log('Unexpected cell: ' + child.tagName)
        break;
      }
    }

    cell.classList.add(newClass)
  }

  let selector = 'div.' + cal + ' tr:nth-child(2) > td:nth-child(1)'
  let target = document.querySelector(selector)

  let doneDays = document.querySelectorAll('div.' + cal + ' td.done')
  target.innerHTML = doneDays.length
}
