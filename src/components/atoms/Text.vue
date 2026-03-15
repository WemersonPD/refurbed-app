<template>
    <component :is="tag" :class="[variantClasses[variant], $attrs.class]">
        <slot />
    </component>
</template>

<script setup lang="ts">
defineOptions({ inheritAttrs: false })

defineProps({
    tag: {
        type: String,
        default: 'span'
    },
    variant: {
        type: String,
        default: 'base',
        validator: (v: string) => ['sm', 'base', 'lg', 'inter', 'inter-light'].includes(v),
    }
})

const variantClasses: Record<string, string> = {
    sm: 'font-semibold text-xs leading-4',    // 12px / 16px
    base: 'font-semibold text-sm leading-5',    // 14px / 20px
    lg: 'font-semibold text-lg leading-7',    // 18px / 28px
    inter: 'font-inter font-normal text-lg leading-none tracking-tight',   // 14px / 14px / -0.15px
    'inter-light': 'font-inter font-normal text-sm leading-none tracking-tight',   // 14px / 14px / -0.15px
}
</script>