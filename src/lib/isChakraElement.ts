import { ParserServices, TSESTree } from "@typescript-eslint/utils";
import { Declaration, Expression, ImportDeclaration, Symbol, SyntaxKind } from "typescript";

export function isChakraElement(node: TSESTree.JSXOpeningElement, parserServices: ParserServices): boolean {
  const typeChecker = parserServices.program.getTypeChecker();
  const tsNode = parserServices.esTreeNodeToTSNodeMap.get(node.name);
  const symbol = typeChecker.getSymbolAtLocation(tsNode);
  // string tag
  if (symbol == null) {
    return false;
  }

  const specifier = getModuleSpecifierOfImportSpecifier(symbol);

  return !!specifier?.startsWith('@base-ui/')
}

// eslint-disable-next-line @typescript-eslint/ban-types -- This Symbol is imported from "typescript"
function getModuleSpecifierOfImportSpecifier(symbol: Symbol): string | null {
  if (symbol.declarations == null || symbol.declarations.length < 1) {
    return null;
  }

  const moduleSpecifier = findModuleSpecifier(symbol.declarations[0]);
  if (!moduleSpecifier) {
    return null;
  }

  const text = moduleSpecifier.getText();
  // strip quote
  return text.slice(1, text.length - 1);
}

function findModuleSpecifier(declaration: Declaration): Expression | null {
  if (declaration.kind === SyntaxKind.ImportSpecifier) {
    return (declaration.parent.parent.parent as ImportDeclaration).moduleSpecifier;
  } else if (declaration.kind === SyntaxKind.NamedImports) {
    // @ts-expect-error TS 4.4 Support. declaration.parent.parent.parent is ImportEqualsDeclaration
    return declaration.parent.parent.parent.moduleSpecifier;
  }

  return null;
}
