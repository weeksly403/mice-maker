export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.4"
  }
  public: {
    Tables: {
      calls: {
        Row: {
          call_notes: string | null
          call_reason: string
          called_at: string | null
          company: string
          contact_name: string
          created_at: string
          email: string
          id: string
          lead_id: string | null
          message: string | null
          next_action: string | null
          partner_id: string | null
          phone: string | null
          preferred_date: string
          preferred_time: string
          ref_code: string | null
          status: string
          timezone: string
          updated_at: string
        }
        Insert: {
          call_notes?: string | null
          call_reason: string
          called_at?: string | null
          company: string
          contact_name: string
          created_at?: string
          email: string
          id?: string
          lead_id?: string | null
          message?: string | null
          next_action?: string | null
          partner_id?: string | null
          phone?: string | null
          preferred_date: string
          preferred_time: string
          ref_code?: string | null
          status?: string
          timezone?: string
          updated_at?: string
        }
        Update: {
          call_notes?: string | null
          call_reason?: string
          called_at?: string | null
          company?: string
          contact_name?: string
          created_at?: string
          email?: string
          id?: string
          lead_id?: string | null
          message?: string | null
          next_action?: string | null
          partner_id?: string | null
          phone?: string | null
          preferred_date?: string
          preferred_time?: string
          ref_code?: string | null
          status?: string
          timezone?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "calls_lead_id_fkey"
            columns: ["lead_id"]
            isOneToOne: false
            referencedRelation: "leads"
            referencedColumns: ["id"]
          },
        ]
      }
      lead_notes: {
        Row: {
          author_id: string | null
          author_name: string | null
          body: string
          created_at: string
          id: string
          lead_id: string
        }
        Insert: {
          author_id?: string | null
          author_name?: string | null
          body: string
          created_at?: string
          id?: string
          lead_id: string
        }
        Update: {
          author_id?: string | null
          author_name?: string | null
          body?: string
          created_at?: string
          id?: string
          lead_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "lead_notes_lead_id_fkey"
            columns: ["lead_id"]
            isOneToOne: false
            referencedRelation: "leads"
            referencedColumns: ["id"]
          },
        ]
      }
      leads: {
        Row: {
          attachments: string[] | null
          budget_per_person: number | null
          commission_percent: number | null
          commission_value: number | null
          company: string
          consent_given: boolean | null
          consent_source: string | null
          contact_name: string
          created_at: string
          currency: Database["public"]["Enums"]["currency_type"] | null
          dates_text: string | null
          email: string
          event_types: Database["public"]["Enums"]["event_type"][]
          expected_payment_date: string | null
          follow_up_remark: string | null
          group_size: Database["public"]["Enums"]["group_size_range"] | null
          id: string
          is_flexible: boolean | null
          language: Database["public"]["Enums"]["lead_language"]
          partner_agency: string | null
          partner_id: string | null
          phone: string | null
          preferred_cities: Database["public"]["Enums"]["preferred_city"][]
          ref_code: string | null
          source: Database["public"]["Enums"]["lead_source"]
          status: Database["public"]["Enums"]["lead_status"]
          total_offer_budget: number | null
          updated_at: string
        }
        Insert: {
          attachments?: string[] | null
          budget_per_person?: number | null
          commission_percent?: number | null
          commission_value?: number | null
          company: string
          consent_given?: boolean | null
          consent_source?: string | null
          contact_name: string
          created_at?: string
          currency?: Database["public"]["Enums"]["currency_type"] | null
          dates_text?: string | null
          email: string
          event_types?: Database["public"]["Enums"]["event_type"][]
          expected_payment_date?: string | null
          follow_up_remark?: string | null
          group_size?: Database["public"]["Enums"]["group_size_range"] | null
          id?: string
          is_flexible?: boolean | null
          language?: Database["public"]["Enums"]["lead_language"]
          partner_agency?: string | null
          partner_id?: string | null
          phone?: string | null
          preferred_cities?: Database["public"]["Enums"]["preferred_city"][]
          ref_code?: string | null
          source?: Database["public"]["Enums"]["lead_source"]
          status?: Database["public"]["Enums"]["lead_status"]
          total_offer_budget?: number | null
          updated_at?: string
        }
        Update: {
          attachments?: string[] | null
          budget_per_person?: number | null
          commission_percent?: number | null
          commission_value?: number | null
          company?: string
          consent_given?: boolean | null
          consent_source?: string | null
          contact_name?: string
          created_at?: string
          currency?: Database["public"]["Enums"]["currency_type"] | null
          dates_text?: string | null
          email?: string
          event_types?: Database["public"]["Enums"]["event_type"][]
          expected_payment_date?: string | null
          follow_up_remark?: string | null
          group_size?: Database["public"]["Enums"]["group_size_range"] | null
          id?: string
          is_flexible?: boolean | null
          language?: Database["public"]["Enums"]["lead_language"]
          partner_agency?: string | null
          partner_id?: string | null
          phone?: string | null
          preferred_cities?: Database["public"]["Enums"]["preferred_city"][]
          ref_code?: string | null
          source?: Database["public"]["Enums"]["lead_source"]
          status?: Database["public"]["Enums"]["lead_status"]
          total_offer_budget?: number | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "leads_partner_id_fkey"
            columns: ["partner_id"]
            isOneToOne: false
            referencedRelation: "partners"
            referencedColumns: ["id"]
          },
        ]
      }
      partners: {
        Row: {
          authorized_by_ministry: boolean | null
          created_at: string
          email: string
          id: string
          name: string
          notes: string | null
          phone: string | null
          updated_at: string
          user_id: string | null
        }
        Insert: {
          authorized_by_ministry?: boolean | null
          created_at?: string
          email: string
          id?: string
          name: string
          notes?: string | null
          phone?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          authorized_by_ministry?: boolean | null
          created_at?: string
          email?: string
          id?: string
          name?: string
          notes?: string | null
          phone?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          created_at: string
          email: string | null
          full_name: string | null
          id: string
          partner_id: string | null
          role: Database["public"]["Enums"]["user_role"] | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          email?: string | null
          full_name?: string | null
          id?: string
          partner_id?: string | null
          role?: Database["public"]["Enums"]["user_role"] | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          email?: string | null
          full_name?: string | null
          id?: string
          partner_id?: string | null
          role?: Database["public"]["Enums"]["user_role"] | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "profiles_partner_id_fkey"
            columns: ["partner_id"]
            isOneToOne: false
            referencedRelation: "partners"
            referencedColumns: ["id"]
          },
        ]
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["user_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["user_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["user_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      generate_call_ref_code: { Args: never; Returns: string }
      generate_ref_code: { Args: never; Returns: string }
      get_current_user_role: {
        Args: never
        Returns: Database["public"]["Enums"]["user_role"]
      }
      get_user_partner_id: { Args: never; Returns: string }
      is_admin: { Args: never; Returns: boolean }
    }
    Enums: {
      currency_type: "MAD" | "EUR" | "USD"
      event_type:
        | "Conference"
        | "Seminar"
        | "Incentive"
        | "TeamBuilding"
        | "Retreat"
        | "Gala"
        | "Other"
      group_size_range: "<30" | "30-80" | "80-150" | "150-300" | "300+"
      lead_language: "FR" | "EN" | "ES" | "AR"
      lead_source: "WebsiteForm" | "Chatbot" | "WhatsApp" | "Manual" | "Other"
      lead_status:
        | "New"
        | "Qualified"
        | "Quoted"
        | "Negotiation"
        | "Won"
        | "Lost"
        | "OnHold"
      preferred_city:
        | "Marrakech"
        | "Casablanca"
        | "Agadir"
        | "Fes"
        | "Sahara"
        | "NotSure"
      user_role: "Admin" | "Partner"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      currency_type: ["MAD", "EUR", "USD"],
      event_type: [
        "Conference",
        "Seminar",
        "Incentive",
        "TeamBuilding",
        "Retreat",
        "Gala",
        "Other",
      ],
      group_size_range: ["<30", "30-80", "80-150", "150-300", "300+"],
      lead_language: ["FR", "EN", "ES", "AR"],
      lead_source: ["WebsiteForm", "Chatbot", "WhatsApp", "Manual", "Other"],
      lead_status: [
        "New",
        "Qualified",
        "Quoted",
        "Negotiation",
        "Won",
        "Lost",
        "OnHold",
      ],
      preferred_city: [
        "Marrakech",
        "Casablanca",
        "Agadir",
        "Fes",
        "Sahara",
        "NotSure",
      ],
      user_role: ["Admin", "Partner"],
    },
  },
} as const
