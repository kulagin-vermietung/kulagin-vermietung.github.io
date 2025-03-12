document.addEventListener("DOMContentLoaded", function () {
    const mapContainer = document.querySelector(".karte-container");
  
    let isDragging = false;
    let startX, startY;
    let translateX = 0, translateY = 0, scale = 1;
    let containerWidth = 3185; 
    let containerHeight = 2607; 
  
    function getBounds() {
      const maxMoveX = (containerWidth * scale - window.innerWidth) / 2;
      const maxMoveY = (containerHeight * scale - 450) / 2;
      return { maxMoveX, maxMoveY };
    }
  
    function setInitialPosition() {
        scale = 1;
        const { maxMoveX, maxMoveY } = getBounds();
        translateX = 490; 
        translateY = -360; 
        mapContainer.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
    }
  
    mapContainer.addEventListener("mousedown", (e) => {
      isDragging = true;
      startX = e.clientX - translateX;
      startY = e.clientY - translateY;
      mapContainer.style.cursor = "grabbing";
    });
  
    document.addEventListener("mousemove", (e) => {
      if (!isDragging) return;
      const { maxMoveX, maxMoveY } = getBounds();
  
      translateX = Math.max(-maxMoveX, Math.min(maxMoveX, e.clientX - startX));
      translateY = Math.max(-maxMoveY, Math.min(maxMoveY, e.clientY - startY));
  
      mapContainer.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
    });
  
    document.addEventListener("mouseup", () => {
      isDragging = false;
      mapContainer.style.cursor = "grab";
    });
  
    mapContainer.addEventListener("wheel", (e) => {
      e.preventDefault();
      let zoomFactor = 0.1;
      let newScale = scale + (e.deltaY < 0 ? zoomFactor : -zoomFactor);
  
      scale = Math.max(0.8, Math.min(1.4, newScale));
  
      const { maxMoveX, maxMoveY } = getBounds();
      translateX = Math.max(-maxMoveX, Math.min(maxMoveX, translateX));
      translateY = Math.max(-maxMoveY, Math.min(maxMoveY, translateY));
  
      mapContainer.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
    });
  
    window.addEventListener("resize", () => {
      setInitialPosition();
    });
  
    // Setze die Startposition
    setInitialPosition();
  });