const [color1, color2, color3] = [
    document.getElementById('color1'),
    document.getElementById('color2'),
    document.getElementById('color3')
  ];

  [color1, color2].forEach(color => {
    color.addEventListener('change', () => {
      color3.value = mix_hexes(color1.value, color2.value);
    });
  });