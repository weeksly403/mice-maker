import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, X } from 'lucide-react';

interface ComparisonColumn {
  header: string;
  values: (string | boolean)[];
  highlighted?: boolean;
}

interface ComparisonTableProps {
  title: string;
  description?: string;
  rows: string[];
  columns: ComparisonColumn[];
}

export const ComparisonTable: React.FC<ComparisonTableProps> = ({
  title,
  description,
  rows,
  columns
}) => {
  return (
    <Card className="my-8">
      <CardHeader>
        <CardTitle className="text-2xl">{title}</CardTitle>
        {description && (
          <p className="text-muted-foreground">{description}</p>
        )}
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left p-4 font-semibold">Feature</th>
                {columns.map((col, idx) => (
                  <th
                    key={idx}
                    className={`text-center p-4 font-semibold ${
                      col.highlighted ? 'bg-primary/5' : ''
                    }`}
                  >
                    {col.header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, rowIdx) => (
                <tr key={rowIdx} className="border-b border-border hover:bg-muted/30">
                  <td className="p-4 font-medium">{row}</td>
                  {columns.map((col, colIdx) => {
                    const value = col.values[rowIdx];
                    const isBoolean = typeof value === 'boolean';
                    
                    return (
                      <td
                        key={colIdx}
                        className={`text-center p-4 ${
                          col.highlighted ? 'bg-primary/5' : ''
                        }`}
                      >
                        {isBoolean ? (
                          value ? (
                            <CheckCircle className="w-5 h-5 text-green-600 mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-muted-foreground mx-auto" />
                          )
                        ) : (
                          <span>{value}</span>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};
