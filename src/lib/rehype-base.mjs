// Antepone BASE a los enlaces e imágenes absolutos ("/algo") del Markdown,
// para que el blog funcione igual en GitHub Pages (/repo/) y en el dominio real (/).
export default function rehypeBase(base = '/') {
  const prefix = base.replace(/\/$/, '');
  return () => (tree) => {
    if (!prefix) return;
    const walk = (node) => {
      if (node.type === 'element') {
        for (const attr of ['href', 'src']) {
          const v = node.properties?.[attr];
          if (typeof v === 'string' && v.startsWith('/') && !v.startsWith('//') && !v.startsWith(prefix + '/')) {
            node.properties[attr] = prefix + v;
          }
        }
      }
      node.children?.forEach(walk);
    };
    walk(tree);
  };
}
